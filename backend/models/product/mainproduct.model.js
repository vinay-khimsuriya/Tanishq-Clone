const mongoose = require("mongoose");

const mainProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    dec: {
      type: String,
    },
    orignalPrice: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: Number,
      required: true,
    },
    discount: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female", "kids", "teen", "kids & teens"],
      required: true,
    },
    occasion: {
      type: String,
    },
    karat: {
      type: String,
      enum: ["18k", "22k", "24k"],
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
    categoryId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Maincategory",
        required: true,
      },
    ],
    subcategoryId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mainsubcategory",
      },
    ],
    collectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
    },
    primaryImge: {
      type: String,
    },
    seconduryImage: {
      type: String,
    },
    images: [{ type: String }],
  },
  {}
);

module.exports = mongoose.model("Mainproduct", mainProductSchema);
