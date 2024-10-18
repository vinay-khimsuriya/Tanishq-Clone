const mongoose = require("mongoose");

const mainProduct = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dec: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
    },
    occasion: {
      type: String,
    },
    purity: {
      type: String,
    },
    weight: {
      type: String,
      required: true,
    },
    metal: {
      type: String,
    },
    metalColor: {
      type: String,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Maincategory",
      required: true,
    },

    subcategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mainsubcategory",
    },
    images: [{ type: String }],
  },
  {}
);

module.exports = mongoose.model("Mainproduct", mainProduct);
