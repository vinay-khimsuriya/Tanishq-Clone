const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();
app.use(express.static('./BackEnd/public'));

PORT = process.env.PORT;
app.use(cors("*"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/images', express.static('public/images'));

const authRoute = require("./BackEnd/routes/authRoute");
const userRoute = require("./BackEnd/routes/userRoute");
const productRoute = require("./BackEnd/routes/productRoute");
const categoryRoute = require('./BackEnd/routes/productCategoryRoutes');
const categoryTypeRoute = require('./BackEnd/routes/categoryTypeRoute');


app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);
app.use("/api/categoryType", categoryTypeRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

app.listen(PORT || 5000, () => {
  console.log(`Server is running on port ${PORT}`);
});
