const Subcategorydata = require("../models/subCategoryData.model.js");
const Subcategory = require("../models/subCategory.model.js");
const Category = require("../models/category.model.js");

const addSubcategoryData = async (req, res) => {
  try {
    const { subcategoryId, categoryId } = req.body;
    const subcategoryDataName = req.body.subcategoryDataName.toLowerCase();

    const subcategory = await Subcategory.findById(subcategoryId);
    if (!subcategory) {
      return res.status(404).json({ message: "Sub Category not found" });
    }

    const subcategorydata = await Subcategorydata.findOne({
      subcategoryDataName,
    });

    if (!subcategorydata && subcategoryId && categoryId) {
      const newSubcategoryData = new Subcategorydata({
        subcategoryDataName: subcategoryDataName,
        subcategory: [subcategoryId],
        category: [categoryId],
      });
      const data = await newSubcategoryData.save();

      return res.status(201).json({
        message: "Subcategory data added successfully",
        subcategorydata: data,
        success: true,
        error: false,
      });
    }
    if (!subcategoryId || !categoryId) {
      return res.status(400).json("subcategory Id and category Id is required");
    }

    const subcategoryExists = subcategorydata?.subcategory?.some(
      (subcatId) => subcatId.toString() === subcategoryId
    );
    const categoryExists = subcategorydata?.category?.some(
      (catId) => catId.toString() === categoryId
    );
    console.log("category Exist >>>", categoryExists);
    console.log("Subcategory Exists >>>", subcategoryExists);

    if (categoryExists) {
      if (subcategoryExists) {
        return res.status(422).json({
          message: "Subcategory already linked to this Subcategory Data",
        });
      }
      subcategorydata.subcategory.push(subcategoryId);

      await subcategorydata.save();

      return res.status(200).json({
        message: "Subcategory linked to subcategory data successfully",
        subcategorydata,
        success: true,
        error: false,
      });
    }

    if (subcategoryExists) {
      subcategorydata.category.push(categoryId);
      await subcategorydata.save();
      return res.status(422).json({
        message:
          "Subcategory already linked to this Subcategory Data and Category is added",
      });
    }

    subcategorydata.subcategory.push(subcategoryId);
    subcategorydata.category.push(categoryId);

    await subcategorydata.save();

    return res.status(200).json({
      message:
        "Subcategory and Category linked to subcategory data successfully",
      subcategorydata,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log("Error in Adding Subcategory Data >>>>>", error);
    res.status(500).json({ message: "Server error", error });
  }
};

const updateSubcategoryData = async (req, res) => {
  try {
    const { subcategorydataId } = req.body;

    const subcategorydataname = req.body.subcategorydataname.toLowerCase();

    const subcategorydata = await Subcategorydata.findById(subcategorydataId);

    if (!subcategorydata) {
      return res.status(404).json({ message: "Sub Category Data not found" });
    }

    subcategorydata.subcategoryDataName = subcategorydataname;
    await subcategorydata.save();

    res.status(200).json({
      message: "Subcategory data name updated successfully",
      subcategorydata,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log("Error in updating Subcategory Data >>>>>", error);
    res.status(500).json({ message: "Server error", error });
  }
};

const getAllSubcategoriesData = async (req, res) => {
  try {
    // const subcategorydata = await Subcategorydata.find();
    const subcategorydata = await Subcategorydata.find().populate(
      "subcategory"
    );

    res.status(200).json({
      message: "Subcategory data fetched successfully",
      subcategorydata,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log("Error in geting all Subcategory Data >>>>>", error);
    res.status(500).json({ message: "Server error", error });
  }
};

const getSubcategoryDatabyIds = async (req, res) => {
  try {
    const { categoryId, subcategoryId } = req.body;

    const subcategorydata = await Subcategorydata.find();

    const filteredData = subcategorydata.filter((subcategorydata) => {
      return (
        subcategorydata.category.includes(categoryId) &&
        subcategorydata.subcategory.includes(subcategoryId)
      );
    });

    console.log(filteredData);

    res.status(200).json({
      message: "Subcategory data fetched successfully",
      subcategorydata: filteredData,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log("Error in geting all Subcategory Data >>>>>", error);
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  addSubcategoryData,
  updateSubcategoryData,
  getAllSubcategoriesData,
  getSubcategoryDatabyIds,
};
