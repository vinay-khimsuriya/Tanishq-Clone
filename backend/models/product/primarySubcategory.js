const mongoose = require("mongoose");

const primarySubcategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: {
        type: String,
        required: true,
      },
    },
    dec: {
      type: String,
    },
    primaryCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Primarycategory",
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mainproduct",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Primarysubcategory", primarySubcategorySchema);
