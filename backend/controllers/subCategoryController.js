const Subcategory = require("../models/subCategory.model.js");
const Category = require("../models/category.model.js");

const addSubcategory = async (req, res) => {
  try {
    const { categoryId } = req.body;
    const subcategoryName = req.body.subcategoryName.toLowerCase();

    const category = await Category.findById(categoryId);

    console.log("checking>>>>>>>");
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    let subcategory = await Subcategory.findOne({ subcategoryName });

    if (!subcategory) {
      const subCategory = new Subcategory({
        subcategoryName: subcategoryName,
        category: [categoryId],
      });
      const data = await subCategory.save();
      console.log("subcategory >>>>>", subCategory);

      return res.status(201).json({
        message: "Subcategory added successfully",
        subcategory: data,
        success: true,
        error: false,
      });
    }

    const categoryExists = subcategory?.category?.some(
      (catId) => catId.toString() === categoryId
    );

    if (categoryExists) {
      return res
        .status(422)
        .json({ message: "Category already linked to this subcategory" });
    }

    subcategory.category.push(categoryId);
    await subcategory.save();

    res.status(200).json({
      message: "Category linked to subcategory successfully",
      subcategory,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log("Error in Adding Subcategory >>>>>", error);
    res.status(500).json({ message: "Server error", error });
  }
};

const updateSubcategory = async (req, res) => {
  try {
    const { subcategoryId, subcategoryName } = req.body;

    const subcategory = await Subcategory.findById(subcategoryId);

    if (!subcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }

    const exist = await Subcategory.findOne({
      subcategoryName,
    });
    if (exist) return res.status(422).json({ message: "already is present" });

    if (subcategoryName) subcategory.subcategoryName = subcategoryName;

    await subcategory.save();

    res.status(200).json({
      message: "Subcategory updated successfully",
      subcategory,
      exist: exist,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log("Error in Updating Subcategory >>>>>", error);
    res.status(500).json({ message: "Server error", error });
  }
};

const getAllSubcategories = async (req, res) => {
  try {
    const subcategories = await Subcategory.find().populate("category");

    if (subcategories.length === 0) {
      return res.status(404).json({ message: "No subcategories found" });
    }

    res.status(200).json({
      message: "Subcategories fetched successfully",
      subcategories,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log("Error in Fetching Subcategories >>>>>", error);
    res.status(500).json({ message: "Server error", error });
  }
};

const getSubcategory = async (req, res) => {
  try {
    const { id } = req.params;

    const subcategory = await Subcategory.find();

    if (!subcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }

    const data = subcategory.filter((subcategory) =>
      subcategory.category.includes(id)
    );

    res.status(200).json({
      message: "Subcategory fetched successfully",
      subcategory: data,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log("Error in Fetching Subcategory >>>>>", error);
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  addSubcategory,
  updateSubcategory,
  getAllSubcategories,
  getSubcategory,
};
