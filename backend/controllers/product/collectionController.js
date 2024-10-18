const Collection = require("../../models/product/collection.model");

const addCollection = async (req, res) => {
  try {
    const { name, slug, dec } = req.body;

    const collection = await Collection.findOne({ slug });
    if (collection) {
      return res.status(409).json({
        collection,
        message: "Collection is Already Exists",
        error: "No Error",
      });
    }

    const primaryImage = req.files["primaryImage"]
      ? `http://localhost:4500/images/${req.files["primaryImage"][0].filename}`
      : null;
    const seconduryImage = req.files["seconduryImage"]
      ? `http://localhost:4500/images/${req.files["seconduryImage"][0].filename}`
      : null;

    const newCollection = new Collection({
      name,
      slug,
      dec,
      primaryImage,
      seconduryImage,
    });

    await newCollection.save();
    return res.status(201).json({
      message: "New collection is added successfuly",
      success: "ok",
      error: "No Error",
      newCollection,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateCollection = async (req, res) => {
  try {
    const { slug } = req.params;
    const collection = await Collection.findOne({ slug });

    if (!collection) {
      return res.status(400).json({ message: "Collection not exists" });
    }
    const { name, newSlug, dec } = req.body;

    const primaryImage = req.files["primaryImage"]
      ? `http://localhost:4500/images/${req.files["primaryImage"][0].filename}`
      : collection.primaryImage;
    const seconduryImage = req.files["seconduryImage"]
      ? `http://localhost:4500/images/${req.files["seconduryImage"][0].filename}`
      : collection.seconduryImage;

    let updatedSlug = slug;
    if (newSlug && newSlug !== slug) {
      updatedSlug = newSlug;
    }
    const updatedData = {
      name,
      slug: updatedSlug,
      dec,
      primaryImage,
      seconduryImage,
    };

    const updatedCollection = await Collection.findOneAndUpdate(
      { slug },
      updatedData,
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "Collection updated successfully",
      success: "ok",
      error: "No Error",
      updatedCollection: { ...updatedCollection._doc, slug: updatedSlug },
      //   updatedCollection: { ...updatedCollection, slug: updatedSlug },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getCollection = async (req, res) => {
  try {
    const collections = await Collection.find();

    if (!collections) {
      return res.status(404).json({ message: "Data Not Found" });
    }

    return res.status(200).json({
      message: "Collection fetched Successfully",
      success: "ok",
      error: "No Error",
      collections,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getCollectionBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const collection = await Collection.findOne({ slug });

    if (!collection) {
      return res.status(404).json({ message: "Collection not Found" });
    }

    return res.status(200).json({
      message: "Collection found successfully",
      success: "ok",
      error: "No Error",
      collection,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteCollection = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteCollectionById = async (req, res) => {
  try {
    const { id } = req.params;
    const collection = await Collection.findByIdAndDelete(id);

    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }

    return res.status(200).json({
      message: "Collection deleted succfully",
      success: "ok",
      error: "No Error",
      deleteCollection: collection,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addCollection,
  updateCollection,
  getCollection,
  getCollectionBySlug,
  deleteCollection,
  deleteCollectionById,
};
