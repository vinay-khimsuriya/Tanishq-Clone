const mongoose = require("mongoose");

const primaryCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
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
    seconduryCategoryIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Secondurycategory",
      },
    ],
    subcategoryIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Primarysubcategory",
      },
    ],
    productIds: [
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

module.exports = mongoose.model("Primarycategory", primaryCategorySchema);
