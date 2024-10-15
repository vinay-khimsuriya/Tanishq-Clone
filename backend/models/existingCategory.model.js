const mongoose = require("mongoose");
const { type } = require("os");

const existingCategory = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      require: true,
    },
    subcategory: [
      {
        subcategoryName: {
          type: String,
        },
        subcategoryData: [
          {
            subcategoryDataName: {
              type: String,
            },
            subcategoryDataLink: {
              type: String,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Existingcategory", existingCategory);
