const Primarysubcategory = require("../../models/product/primarySubcategory.model");
const Primarycategory = require("../../models/product/primaryCategory.model");
const Secondurycategory = require("../../models/product/seconduryCategory.model");

const addSubcategory = async (req, res) => {
  try {
    const { name, slug, dec, primaryCategoryId, seconduryCategoryId } =
      req.body;

    const primaryCategory = await Primarycategory.findById(primaryCategoryId);
    if (!primaryCategory) {
      return res.status(404).json({ message: "Primary category not found" });
    }

    const existingSubcategory = await Primarysubcategory.findOne({ slug });
    if (existingSubcategory) {
      return res.status(409).json({
        message: "Subcategory already exists",
      });
    }

    const primarySubcategory = new Primarysubcategory({
      name,
      slug,
      dec,
      primaryCategoryId,
    });

    await primarySubcategory.save();

    primaryCategory.subcategoryIds.push(primarySubcategory._id);
    await primaryCategory.save();

    let updatedSeconduryCategory = null;

    if (seconduryCategoryId) {
      const seconduryCategory = await Secondurycategory.findById(
        seconduryCategoryId
      );
      if (seconduryCategory) {
        seconduryCategory.subcategoryIds.push(primarySubcategory._id);
        await seconduryCategory.save();
        updatedSeconduryCategory = seconduryCategory;
      }
    }

    return res.status(201).json({
      message: "Subcategory added successfully",
      primarySubcategory,
      updatedPrimaryCategory: primaryCategory,
      updatedSeconduryCategory:
        updatedSeconduryCategory || "No secondary category updated",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const demo = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { addSubcategory };
