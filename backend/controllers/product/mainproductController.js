const Mainproduct = require("../../models/product/mainproduct.model");
const Maincategory = require("../../models/product/maincategory.model");
const Mainsubcategory = require("../../models/product/mainsubcategory.model");
const addProduct = async (req, res) => {
  try {
    const {
      name,
      dec,
      price,
      gender,
      occasion,
      purity,
      weight,
      metal,
      metalColor,
      categoryId,
      subcategoryId,
    } = req.body;

    const categoryExist = await Maincategory.findById(categoryId);
    if (!categoryExist) {
      return res.status(404).json({ message: "Category not found" });
    }

    // const subcategoryExist = await Mainsubcategory.findById(subcategoryId);
    // if (!subcategoryExist) {
    //   return res.status(404).json({ message: "Subcategory not found" });
    // }

    const images = req.files.map((file) => {
      const imageName = file.filename;
      return `http://localhost:4500/images/${imageName}`;
    });
    console.log(images);
    const newProduct = new Mainproduct({
      name,
      dec,
      price,
      gender,
      occasion,
      purity,
      weight,
      metal,
      metalColor,
      categoryId,
      subcategoryId: subcategoryId ? subcategoryId : null,
      images,
    });

    await newProduct.save();

    res
      .status(201)
      .json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {};
const getAllProduct = async (req, res) => {};
const getProducByCategoryId = async (req, res) => {};
const getProducBySubcategoryId = async (req, res) => {};

module.exports = {
  addProduct,
  updateProduct,
  getAllProduct,
  getProducByCategoryId,
  getProducBySubcategoryId,
};
