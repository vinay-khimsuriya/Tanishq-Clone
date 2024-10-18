const Mainsubcategory = require("../../models/product/mainsubcategory.model");
const Maincategory = require("../../models/product/maincategory.model");

const addSubcategory = async (req, res) => {
  try {
    const { name, innerCategory, categoryId } = req.body;

    if (!name || !categoryId) {
      return res
        .status(400)
        .json({ message: "name and categoryId is required" });
    }
    const categoryexist = await Maincategory.findById(categoryId);

    if (!categoryexist) {
      return res.status(404).json({ message: "category is not found" });
    }

    const subcategory = await Mainsubcategory.findOne({ name });

    if (
      subcategory &&
      subcategory.innerCategory == innerCategory &&
      subcategory.categoryId == categoryId
    ) {
      return res
        .status(409)
        .json({ message: "Subcategory already present", subcategory });
    }

    const newsubcat = new Mainsubcategory({
      name,
      innerCategory,
      categoryId,
    });

    await newsubcat.save();

    return res.status(201).json({
      newsubcat,
      message: "Subcategory added successfully",
      success: "ok",
      error: "No Error",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateSubcategoryProducts = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllSubcategory = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getSubcategorynbyId = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductsBySubcategory = async (req, res) => {
  try {
    const { subcategoryId } = req.params;

    const subcategory = await Mainsubcategory.findById(subcategoryId).populate(
      "products"
    );

    if (!subcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }

    res.status(200).json({
      subcategoryName: subcategory.name,
      products: subcategory.products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addSubcategory,
  updateSubcategoryProducts,
  getAllSubcategory,
  getSubcategorynbyId,
  getProductsBySubcategory,
};
