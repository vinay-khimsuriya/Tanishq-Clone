const express = require("express");
const router = express.Router();

const {
  addSeconduryCategory,
  getSeconduryCategory,
} = require("../../controllers/product/secondurycategoryController");

router.post("/", addSeconduryCategory);
router.put("/");
getSeconduryCategory, router.get("/", getSeconduryCategory);
router.get("/:slug");
router.delete("/:id");

module.exports = router;
