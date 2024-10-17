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
  },
  {}
);

module.exports = mongoose.model("Mainproduct", mainProduct);
