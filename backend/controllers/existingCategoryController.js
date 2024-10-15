const Category = require("../models/existingCategory.model.js"); // Assuming the model file is named existingCategoryModel

addOrUpdateCategory = async (req, res) => {
  try {
    const {
      categoryName,
      subcategoryName,
      subcategoryDataName,
      subcategoryDataLink,
    } = req.body;

    // Check if the category already exists
    let category = await Category.findOne({ categoryName });

    if (!category) {
      // If category doesn't exist, create a new category with the provided details
      category = new Category({
        categoryName,
        subcategory: [],
      });
    }

    // If subcategory is provided, check if it exists in the category
    if (subcategoryName) {
      let subcategory = category.subcategory.find(
        (sub) => sub.subcategoryName === subcategoryName
      );

      if (!subcategory) {
        // If subcategory doesn't exist, create a new one
        subcategory = {
          subcategoryName: subcategoryName,
          subcategoryData: [],
        };
        category.subcategory.push(subcategory);
      }

      // If subcategoryData is provided, check if it exists in the subcategory
      if (subcategoryDataName) {
        const subcategoryDataExists = subcategory.subcategoryData.find(
          (data) => data.subcategoryDataName === subcategoryDataName
        );

        if (!subcategoryDataExists) {
          // If subcategory data doesn't exist, add the new subcategory data
          subcategory.subcategoryData.push({
            subcategoryDataName: subcategoryDataName,
            subcategoryDataLink: subcategoryDataLink,
          });
        } else {
          // Update subcategory data link if needed
          subcategoryDataExists.subcategoryDataLink = subcategoryDataLink;
        }
      }
    }

    // Save the category with the updates (new or existing)
    await category.save();

    res
      .status(200)
      .json({ message: "Category updated successfully", category });
  } catch (error) {
    res.status(500).json({ message: "Error updating category", error });
  }
};

const addOrUpdateSubCategory = async (req, res) => {
  try {
    const { categoryName, subcategoryName } = req.body;

    if (categoryName) {
      const category = await Category.findOne({ categoryName });

      if (!category) {
        category = new Category({ categoryName, subcategoryName });
      } else {
        if (subcategoryName) {
          let subcategory = category.subcategory.find(
            (sub) => sub.subcategoryName === subcategoryName
          );

          if (!subcategory) {
            subcategory = {
              subcategoryName,
              subcategoryData: [],
            };
          }
        }
      }
    }
  } catch (error) {
    console.log("Error in adding or updating subcategory >>>>>", error);
  }
};

module.exports = { addOrUpdateCategory };
