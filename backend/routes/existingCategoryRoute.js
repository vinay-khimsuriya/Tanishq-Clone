const express = require("express");
const router = express.Router();
const {
  addOrUpdateCategory,
} = require("../controllers/existingCategoryController.js");

router.post("/addcategory", addOrUpdateCategory);

module.exports = router;
