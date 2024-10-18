const express = require("express");
const router = express.Router();

const {
  addSubcategory,
  updateSubcategoryProducts,
  getAllSubcategory,
  getSubcategorynbyId,
} = require("../../controllers/product/mainsubcategoryController");

router.post("/", addSubcategory);
router.put("/", updateSubcategoryProducts);
router.get("/", getAllSubcategory);
router.get("/", getSubcategorynbyId);

module.exports = router;
