const Cart = require("../models/cart.model");
const Product = require("../models/product.model");

const getCartByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const cart = await Cart.findOne({ userId }).populate("products.productId");

    if (!cart) {
      return res.status(404).json({ message: "Cart is Empty" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const addProductToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await Cart.findOne({ userId });

    if (cart) {
      // Check if product already exists in the cart
      const productIndex = cart.products.findIndex(
        (p) => p.productId.toString() === productId
      );

      if (productIndex > -1) {
        // If product exists, update the quantity
        cart.products[productIndex].quantity += quantity;
      } else {
        // If product doesn't exist, add it to the cart
        cart.products.push({ productId, quantity });
      }
    } else {
      // If cart doesn't exist, create a new one
      cart = new Cart({
        userId,
        products: [{ productId, quantity }],
      });
    }

    await cart.save();
    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update quantity of a product in the cart
const updateProductQuantity = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart is Empty" });
    }

    const productIndex = cart.products.findIndex(
      (p) => p.productId.toString() === productId
    );

    if (productIndex > -1) {
      // Update product quantity
      cart.products[productIndex].quantity = quantity;

      if (cart.products[productIndex].quantity === 0) {
        // Remove product if quantity is set to 0
        cart.products.splice(productIndex, 1);
      }

      await cart.save();
      res.status(200).json({ message: "Cart updated", cart });
    } else {
      res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Remove a product from the cart
const removeProductFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const productIndex = cart.products.findIndex(
      (p) => p.productId.toString() === productId
    );

    if (productIndex > -1) {
      // Remove the product from the cart
      cart.products.splice(productIndex, 1);
      await cart.save();
      res.status(200).json({ message: "Product removed from cart", cart });
    } else {
      res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Clear the entire cart for a user
const clearCart = async (req, res) => {
  try {
    const userId = req.params.userId;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.products = [];
    await cart.save();

    res.status(200).json({ message: "Cart cleared", cart });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  getCartByUserId,
  addProductToCart,
  updateProductQuantity,
  removeProductFromCart,
  clearCart,
};
