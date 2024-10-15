const express = require("express");
const {
  addCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} = require("../controllers/categoryController");
const router = express.Router();

router.post("/", addCategory);
router.put("/", updateCategory);
router.get("/", getAllCategory);
router.get("/:id", getCategory);

module.exports = router;
