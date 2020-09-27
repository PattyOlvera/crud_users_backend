const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  status: Boolean,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
