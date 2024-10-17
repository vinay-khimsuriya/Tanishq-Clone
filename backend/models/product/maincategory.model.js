const mongoose = require("mongoose");

const mainCategory = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dec: {
      type: String,
    },
    primaryImage: {
      type: String,
    },
    seconduryImage: {
      type: String,
    },
    subcategories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "mainsubcategory",
    },
    products: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "mainproduct",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Maincategory", mainCategory);
