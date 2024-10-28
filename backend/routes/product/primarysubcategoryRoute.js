const express = require("express");
const router = express.Router();

const {
  addSubcategory,
} = require("../../controllers/product/primarysubcategoryController");

router.post("/", addSubcategory);
router.put("/");
router.get("/");
router.get("/:slug");
router.delete("/:id");

module.exports = router;
