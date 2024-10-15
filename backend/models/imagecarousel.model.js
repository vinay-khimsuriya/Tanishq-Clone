const mongoose = require("mongoose");

const imagecarouselSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    largeScreenImage: {
      type: String,
      required: true,
    },
    smallScreenImage: {
      type: String,
      required: true,
    },
    card: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "imagecarouselcard",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Imagecarousel", imagecarouselSchema);
