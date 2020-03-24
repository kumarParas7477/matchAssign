const express = require("express");
const router = require("./router/userRouter");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
mongoose
  .connect("mongodb://localhost:27017/usersData", {
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
