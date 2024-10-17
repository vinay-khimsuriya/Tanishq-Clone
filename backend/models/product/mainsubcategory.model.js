const mongoose = require("mongoose");

const mainSubcategory = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "maincategory",
    },
  },
  {
    timestamps: true,
  }
);
