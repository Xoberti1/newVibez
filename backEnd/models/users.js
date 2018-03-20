const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  // need to at regx to verify this is actually an email
  zipCode: { type: Number, min:10000, max: 99999, required: true },
  name: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
