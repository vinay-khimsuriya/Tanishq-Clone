const mongoose = require("mongoose");

const productdatailSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },
    subcategorytype: {
      type: String,
      required: true,
    },
    goldkarat: {
      type: Number,
    },
    diamondcat: {
      type: Number,
    },
    weight: {
      type: Number,
      required: true,
    },
    discountprice: {
      type: Number,
    },

    images: [
      {
        imageUrl: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Productdetail", productdatailSchema);
