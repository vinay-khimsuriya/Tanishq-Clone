const mongoose = require("mongoose");

const mainCategory = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
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
    categoryZero: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "",
      },
    ],
    subcategories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mainsubcategory",
    },
    products: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mainproduct",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Maincategory", mainCategory);
