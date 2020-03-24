const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  Username: String,
  password: String
});

module.exports = mongoose.model("User", UserSchema);
