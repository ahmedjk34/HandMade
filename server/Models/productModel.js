const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 5,
    maxLength: 25,
    required: true,
  },
  body: {
    type: String,
    minLength: 10,
    maxLength: 60,
    required: true,
  },
  stars: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
  },
});
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 5,
    maxLength: 25,
    required: true,
  },
  body: {
    type: String,
    minLength: 10,
    maxLength: 300,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  maker: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  catagories: {
    type: [String],
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  reviews: {
    type: [reviewSchema],
  },
});

module.exports = mongoose.model("products", productSchema);

//?creating a product

// mongoose
//   .model("products", productSchema)
//   .create({
//     title: "Lucky Owl Charm",
//     body: "An owl wishes you a good day !",
//     photo: "https://i.postimg.cc/NjQ0ZfSk/21955651339-18222dd079-q-1.png",
//     maker: "643ac4ccd57bd9e74ce5de67",
//     price: 25.5,
//     catagories: ["neckless", "charm", "animal"],
//     rating: 4.8,
//   })
//   .then((e) => console.log(e));
