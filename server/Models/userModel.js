const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    minLength: 4,
    maxLength: 10,
    required: true,
  },
  password: {
    type: String,
    minLength: 5,
    maxLength: 15,
    required: true,
  },
});
module.exports = mongoose.model("user", userSchema);
