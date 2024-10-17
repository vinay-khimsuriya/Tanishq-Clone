const express = require("express");
const router = express.Router();
const upload = require("../../multerConfiguration.js");

const {
  addCategory,
  updateCategoryName,
  updateCategoryDec,
  updateCategoryPrimaryImage,
  updateCategorySecImage,
  updateCategorySubcat,
  updateCategoryProduct,
  getAllCategory,
  getCategorybyId,
} = require("../../controllers/product/maincategoryController");

router.post(
  "/",
  upload.fields([
    { name: "primaryImage", maxCount: 1 },
    { name: "seconduryImage", maxCount: 1 },
  ]),
  addCategory
);
router.put("/:id/name", updateCategoryName);
router.put("/:id/dec", updateCategoryDec);
router.put(
  "/:id/primaryimage",
  upload.single("primaryImage"),
  updateCategoryPrimaryImage
);
router.put(
  "/:id/secondaryimage",
  upload.single("seconduryImage"),
  updateCategorySecImage
);
router.put("/:id/subcat", updateCategorySubcat);
router.put("/:id/product", updateCategoryProduct);
router.get("/", getAllCategory);
router.get("/:id", getCategorybyId);

module.exports = router;
