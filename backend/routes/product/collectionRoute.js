const express = require("express");
const upload = require("../../multerConfiguration");

const router = express.Router();
const {
  addCollection,
  updateCollection,
  getCollectionById,
  getCollection,
  deleteCollection,
  deleteCollectionById,
} = require("../../controllers/product/collectionController");

router.post(
  "/",
  upload.fields[
    ({ name: "primaryImage", maxCount: 1 },
    { name: "seconduryImage", maxCount: 1 })
  ],
  addCollection
);
router.put(
  "/:slug",
  upload.fields([
    { name: "primaryImage", maxCount: 1 },
    { name: "seconduryImage", maxCount: 1 },
  ]),
  updateCollection
);
router.get("/", getCollection);
router.get("/:slug", getCollectionBySlug);
router.delete("/", deleteCollection);
router.delete("/:id", deleteCollectionById);

module.exports = router;
