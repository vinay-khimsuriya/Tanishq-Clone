const Maincategory = require("../../models/product/maincategory.model");

const addCategory = async (req, res) => {
  try {
    const { name, dec } = req.body;

    const category = await Maincategory.findOne({ name });

    if (category) {
      return req.status(409).json({
        category,
        message: "Category already exists",
        error: "No Error",
      });
    }
    const primaryImage = req.files["primaryImage"]
      ? `http://localhost:4500/images/${req.files["primaryImage"][0].filename}`
      : null;
    const seconduryImage = req.files["seconduryImage"]
      ? `http://localhost:4500/images/${req.files["seconduryImage"][0].filename}`
      : null;

    const newCategory = new Maincategory({
      name,
      dec,
      primaryImage,
      seconduryImage,
    });

    await newCategory.save();
    res.status(201).json({
      newCategory,
      message: "Category created successfuly",
      error: "No Error",
    });
    // const category = await Maincategory.findOne(
    //   { name },
    //   {
    //     dec,
    //     primaryImage: primaryimage || null,
    //     seconduryImage: seconduryimage || null,
    //     subcategories: subcat || [],
    //     products: product || [],
    //   },
    //   {
    //     new: true, // Retrun the updated document
    //     upsert: true, //Create a new document if no match is found
    //   }
    // );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateCategoryName = async () => {
  try {
    const { name } = req.body;
    const updatedCategory = await Maincategory.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({
      updatedCategory,
      message: "Category updated successfuly",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const updateCategoryDec = async () => {
  try {
    const { dec } = req.body;
    const updatedCategory = await Maincategory.findByIdAndUpdate(
      req.params.id,
      { dec },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({
      updatedCategory,
      message: "Category updated successfuly",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const updateCategoryPrimaryImage = async () => {
  try {
    const { primaryimage } = req.body;
    const updatedCategory = await Maincategory.findByIdAndUpdate(
      req.params.id,
      { primaryimage },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({
      updatedCategory,
      message: "Category updated successfuly",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const updateCategorySecImage = async () => {
  try {
    const { secondaryimage } = req.body;
    const updatedCategory = await Maincategory.findByIdAndUpdate(
      req.params.id,
      { secondaryimage },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({
      updatedCategory,
      message: "Category updated successfuly",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const updateCategorySubcat = async () => {
  try {
    // const category = await MainCategory.findById(req.params.id);

    // if (!category) {
    //   return res.status(404).json({ message: "Category not found" });
    // }

    // // Append new subcategories to the existing array
    // category.subcategories = [
    //   ...new Set([...category.subcategories, ...subcategories]),
    // ];

    const { subcat } = req.body;
    const updatedCategory = await Maincategory.findByIdAndUpdate(
      req.params.id,
      { subcat }, //this will replace old array data with new array data
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({
      updatedCategory,
      message: "Category updated successfuly",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const updateCategoryProduct = async () => {
  try {
    const { product } = req.body;
    const updatedCategory = await Maincategory.findByIdAndUpdate(
      req.params.id,
      { product }, //this will replace old array data with new array data
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({
      updatedCategory,
      message: "Category updated successfuly",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const getAllCategory = async () => {
  try {
    const categories = await Maincategory.find();

    return res.status(200).json({
      categories: categories || "Empty bucket",
      message: "Data fetched Successfuly",
      error: "No Error",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getCategorybyId = async () => {
  try {
    const category = await Maincategory.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }
    return res.status(200).json({
      category,
      message: "Category Successfuly fetched With Id",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addCategory,
  updateCategoryName,
  updateCategoryDec,
  updateCategoryPrimaryImage,
  updateCategorySecImage,
  updateCategorySubcat,
  updateCategoryProduct,
  getAllCategory,
  getCategorybyId,
};
