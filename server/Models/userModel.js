const mongoose = require("mongoose");

const ANONYMOUS_PFP =
  "https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg";
const ANONYMOUS_Banner =
  "https://community.khoros.com/t5/image/serverpage/image-id/164425iE641E9340947FE57/image-size/large/is-moderation-mode/true?v=v2&px=999";
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
  profile_picture: {
    type: String,
    default: ANONYMOUS_PFP,
    required: true,
  },
  banner: {
    type: String,
    default: ANONYMOUS_Banner,
    required: true,
  },
  //TODO: add collections
});
module.exports = mongoose.model("user", userSchema);
