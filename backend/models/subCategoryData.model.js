const mongoose = require("mongoose");

const subcategoryDataSchema = new mongoose.Schema(
  {
    subcategoryDataName: {
      type: String,
      required: true,
    },
    subcategory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subcategory",
      },
    ],
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subcategory",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subcategorydata", subcategoryDataSchema);
