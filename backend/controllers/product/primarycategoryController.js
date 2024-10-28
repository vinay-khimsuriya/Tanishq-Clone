const Primarycategory = require("../../models/product/primaryCategory.model.js");

const addCategory = async (req, res) => {
  try {
    const { name, slug, dec } = req.body;

    if (!name || !slug) {
      return res.status(400).json({
        message: "Required fields missing (name or slug)",
        error: "Validation Error",
      });
    }
    const category = await Primarycategory.findOne({ slug });

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

    const newCategory = new Primarycategory({
      name,
      slug,
      dec,
      primaryImage,
      seconduryImage,
    });

    await newCategory.save();
    res.status(201).json({
      message: "Category created successfuly",
      newCategory,
      success: "ok",
      error: "No Error",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const category1 = await Primarycategory.find()
      .populate("seconduryCategoryIds")
      .populate("subcategoryIds");

    const category2 = await Primarycategory.find()
      .populate({
        path: "seconduryCategoryIds",
        populate: { path: "subcategoryIds" },
      })
      .populate("subcategoryIds");

    let category = await Primarycategory.find()
      .populate("seconduryCategoryIds")
      .populate("subcategoryIds");

    category = await Primarycategory.populate(category, {
      path: "seconduryCategoryIds.subcategoryIds",
    });

    res.status(201).json({
      message: "Category fetched successfuly",
      category,
      success: "ok",
      error: "No Error",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);

    const category = await Primarycategory.findById(id);

    if (!category) {
      return res.status(400).json({
        message: "category not exits",
      });
    }

    const seconduryCategoryIds = category.seconduryCategoryIds;
    const subcategoryIds = category.subcategoryIds;
    const productIds = category.productIds;

    if (
      seconduryCategoryIds.length === 0 &&
      subcategoryIds.length === 0 &&
      productIds.length === 0
    ) {
      await Primarycategory.findByIdAndDelete(id);
      return res.status(200).json({
        message: "Category deleted successfully",
      });
    }
    return res.status(200).json({
      message: "Category has associated data",
      category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { addCategory, getAllCategory, deleteCategory };
