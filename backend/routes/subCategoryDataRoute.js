const express = require("express");

const router = express.Router();

const {
  addSubcategoryData,
  updateSubcategoryData,
  getAllSubcategoriesData,
  getSubcategoryDatabyIds,
  //   getSubcategoryData,
} = require("../controllers/subCategoryDataController");

router.post("/", addSubcategoryData);
router.put("/", updateSubcategoryData);
router.get("/", getAllSubcategoriesData);
router.post("/ids", getSubcategoryDatabyIds);
// router.get("/:id", getSubcategoryData);

module.exports = router;
