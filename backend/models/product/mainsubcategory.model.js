const mongoose = require("mongoose");

const mainSubcategory = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    innerCategory: {
      type: String,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Maincategory",
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mainproduct",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Mainsubcategory", mainSubcategory);
