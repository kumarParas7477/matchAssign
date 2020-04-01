const express = require("express");
const router = require("./router/userRouter");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

require("dotenv").config();
app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
});

mongoose
  .connect("mongodb://localhost:27017/userDocument2", {
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(() => console.log("connection established"))
  .catch(err => {
    console.log(err);
    process.exit();
  });

app.use(bodyParser.json());
app.use(cors());
router(app);
app.listen(3000, () => console.log("express server started"));
