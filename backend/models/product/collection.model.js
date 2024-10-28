const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema(
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
    primarysubcategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Primarysubcategory",
    },
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

module.exports = mongoose.model("Collection", collectionSchema);
