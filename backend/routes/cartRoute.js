const express = require("express");
const { verifyToken } = require("../middlewares/verifyToken");
const {
  getCartByUserId,
  addProductToCart,
  updateProductQuantity,
  removeProductFromCart,
  clearCart,
} = require("../controllers/cartController");

const router = express.Router();

router.get("/:userId", verifyToken, getCartByUserId);

router.post("/add", verifyToken, addProductToCart);

router.put("/update", verifyToken, updateProductQuantity);

router.delete("/remove", verifyToken, removeProductFromCart);

router.delete("/clear/:userId", verifyToken, clearCart);

module.exports = router;

// const express = require("express");

// const router = express.Router();

// router.post("/add");

// const {
//   addToCart,
//   updateCart,
//   clearCart,
//   deleteCartItem,
//   getCartItem,
// } = require("../controllers/cartController");

// router.post("/add", addToCart);
// router.post("/update", updateCart);
// router.post("/clearcart", clearCart);
// router.delete("/add", deleteCartItem);
// router.get("/getCartItem", getCartItem);

// module.exports = router;
