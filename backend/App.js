const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:4500/",
  })
);

app.use(express.json({ limit: "16kb" }));
// this set we accept json data limit of 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
//this will encode the url
app.use(express.static("public"));
//when we want to save storage into our server

module.exports = app;
