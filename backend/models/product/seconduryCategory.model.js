const mongoose = require("mongoose");

const seconduryCategorySchema = new mongoose.Schema(
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
    subcategoryIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Primarysubcategory",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Secondurycategory", seconduryCategorySchema);
