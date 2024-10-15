const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema(
  {
    subcategoryName: {
      type: String,
      required: true,
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Subcategory", subcategorySchema);
