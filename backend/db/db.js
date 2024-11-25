require("dotenv").config;
const mongoose = require("mongoose");
const dbConnection = process.env.MONGO_URL;

const connectDB = async () => {
  console.log(dbConnection);
  try {
    const connection = await mongoose.connect(dbConnection);
    console.log(
      "DB is connected successfully" + connection.connection.db.databaseName
    );
  } catch (error) {
    console.log("Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
