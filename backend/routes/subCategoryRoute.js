const express = require("express");

const router = express.Router();

const {
  addSubcategory,
  updateSubcategory,
  getAllSubcategories,
  getSubcategory,
} = require("../controllers/subCategoryController");

router.post("/", addSubcategory);
router.put("/", updateSubcategory);
router.get("/", getAllSubcategories);
router.get("/:id", getSubcategory);

module.exports = router;
