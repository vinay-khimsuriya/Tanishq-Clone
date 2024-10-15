const mongoose = require("mongoose");
const Subcategory = require("./subCategory.model.js"); // Import Subcategory schema

const CategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    subcategory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subcategory",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
