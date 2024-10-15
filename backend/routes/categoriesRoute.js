const express = require("express");
const router = express.Router();
const {
  createCategory,
  updateCategory,
} = require("../controllers/categoryController");

router.post("/add", createCategory);

router.post("/update", updateCategory);

module.exports = router;
