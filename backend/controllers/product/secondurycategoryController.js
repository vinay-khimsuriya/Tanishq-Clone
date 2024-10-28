const Secondurycategory = require("../../models/product/seconduryCategory.model.js");
const Primarycategory = require("../../models/product/primaryCategory.model.js");

const addSeconduryCategory = async (req, res) => {
  try {
    const { name, slug, primaryCategoryId } = req.body;

    const primaryCategory = await Primarycategory.findById(primaryCategoryId);

    if (!primaryCategory) {
      return res.status(404).json({
        message: "Primary category does not exist",
      });
    }

    const existingCategory = await Secondurycategory.findOne({ slug });
    if (existingCategory) {
      return res.status(409).json({
        message: "Secondary category already exists",
      });
    }

    const seconduryCategory = new Secondurycategory({
      name,
      slug,
      primaryCategoryId,
    });

    await seconduryCategory.save();

    primaryCategory.seconduryCategoryIds.push(seconduryCategory._id);
    await primaryCategory.save();

    return res.status(201).json({
      message: "Secondary category added successfully",
      seconduryCategory,
      updatedPrimaryCategory: primaryCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getSeconduryCategory = async (req, res) => {
  try {
    const category = await Secondurycategory.find();

    if (category) {
      return res.status(200).json({
        message: "fetched all secondury category successfuly",
        category,
        success: "ok",
        error: "No Error",
      });
    }
    return res.status(404).json("data not found");
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { addSeconduryCategory, getSeconduryCategory };

// const addSeconduryCategory = async (ref, req) => {
//   try {
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };
