const express = require("express");
const router = express.Router();
const upload = require("../../multerConfiguration");

const {
  addProduct,
  updateProduct,
  getAllProduct,
  getProducByCategoryId,
  getProducBySubcategoryId,
} = require("../../controllers/product/mainproductController");

router.post("/", upload.array("images"), addProduct);
router.put("/", updateProduct);
router.get("/", getAllProduct);
router.post("/category/:id", addProduct);
router.post("/subcategory/:id", addProduct);

module.exports = router;
