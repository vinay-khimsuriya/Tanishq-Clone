const mongoose = require("mongoose");

const imagecarouselcardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    primaryImage: {
      type: String,
      required: true,
    },
    seconduryImage: {
      type: String,
      required: true,
    },
    stoke: {
      type: Number,
      requred: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },

    card: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productdetail",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Imagecarouselcard", imagecarouselcardSchema);
