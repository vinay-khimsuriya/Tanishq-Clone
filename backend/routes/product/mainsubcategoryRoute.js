const express = require("express");
const router = express.Router();

const {
  addSubcategory,
  updateSubcategory,
  getAllSubcategory,
  getSubcategorynbyId,
} = require("../../controllers/product/mainsubcategoryController");

router.post("/", addSubcategory);
router.put("/", updateSubcategory);
router.get("/", getAllSubcategory);
router.get("/", getSubcategorynbyId);

module.exports = router;
