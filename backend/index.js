const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(express.static("./public"));

PORT = process.env.PORT;
app.use(cors("*"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/images', express.static('public/images'));

const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const categoryTypeRoute = require("./routes/categoryTypeRoute");
const cartRoutes = require("./routes/cartRoute");
const categoryRoute = require("./routes/categoryRoute");
const subCategoryRoute = require("./routes/subCategoryRoute");
const subCategoryDataRoute = require("./routes/subCategoryDataRoute");
const productdetailRoute = require("./routes/productdetailRoute");
const maincategoryRoute = require("./routes/product/maincategoryRoute");
const mainsubcategoryRoute = require("./routes/product/mainsubcategoryRoute");
const mainproductRoute = require("./routes/product/mainproductRoute");
const collectionRoute = require("./routes/product/collectionRoute");

const primarycategoryRoute = require("./routes/product/primarycategoryRoute");
const secondurycategoryRoute = require("./routes/product/secondurycategoryRoute");
const primarysubcategoryRoute = require("./routes/product/primarysubcategoryRoute");

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/categoryType", categoryTypeRoute);
app.use("/api/cart", cartRoutes);
app.use("/api/admin/managecategory/category", categoryRoute);
app.use("/api/admin/managecategory/subcategory", subCategoryRoute);
app.use("/api/admin/managecategory/subcategorydata", subCategoryDataRoute);
app.use("/api/admin/productdetail", productdetailRoute);
app.use("/api/maincategory", maincategoryRoute);
app.use("/api/mainsubcategory", mainsubcategoryRoute);
app.use("/api/mainproduct", mainproductRoute);
app.use("/api/collection", collectionRoute);

app.use("/api/primarycategory", primarycategoryRoute);
app.use("/api/secondurycategory", secondurycategoryRoute);
app.use("/api/primarysubcategory", primarysubcategoryRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

app.listen(PORT || 5000, () => {
  console.log(`Server is running on port ${PORT}`);
});
