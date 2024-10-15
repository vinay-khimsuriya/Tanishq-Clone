const Category = require("../models/category.model");

const addCategory = async (req, res) => {
  try {
    const categoryName = req.body.categoryName.toLowerCase();

    const existingCategory = await Category.findOne({ categoryName });

    if (existingCategory) {
      return res.status(422).json({ message: "Category already exists" });
    }

    const category = new Category({
      categoryName,
    });
    await category.save();

    res.status(201).json({
      message: "Category added successfully",
      category,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log("Error in Adding Category >>>>>", error);
    res.status(500).json({ message: error, error });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { categoryId, categoryName } = req.body;

    // Find the category by name
    const existingCategory = await Category.findById(categoryId);

    if (!existingCategory) {
      return res.status(404).json({ message: "Category does not exist" });
    }

    existingCategory.categoryName = categoryName;
    await existingCategory.save();

    res.status(200).json({
      message: "Category updated successfully",
      category: existingCategory,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log("Error in Updating Category >>>>>", error);
    res.status(500).json({ message: "Server error", error });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();

    if (categories.length === 0) {
      return res.status(404).json({ message: "No categories found" });
    }

    res.status(200).json({
      message: "Categories fetched successfully",
      categories,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log("Error in Fetching Categories >>>>>", error);
    res.status(500).json({ message: "Server error", error });
  }
};

const getCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      message: "Category fetched successfully",
      category,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log("Error in Fetching Category >>>>>", error);
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  addCategory,
  updateCategory,
  getAllCategory,
  getCategory,
};
