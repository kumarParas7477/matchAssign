const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  Username: String,
  password: String,
  favourites: []
});

module.exports = mongoose.model("User", UserSchema);
