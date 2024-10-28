const express = require("express");
const upload = require("../../multerConfiguration");
const router = express.Router();

const {
  addCategory,
  getAllCategory,
  deleteCategory,
} = require("../../controllers/product/primarycategoryController");

router.post(
  "/",
  upload.fields([
    { name: "primaryImage", maxCount: 1 },
    { name: "seconduryImage", maxCount: 1 },
  ]),
  addCategory
);
router.put("/");
router.get("/", getAllCategory);
router.get("/:slug");
router.delete("/:id", deleteCategory);

module.exports = router;
