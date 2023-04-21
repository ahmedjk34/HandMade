const productModel = require("../Models/productModel");
const userModel = require("../Models/userModel");

exports.getPosts = async function (req, res) {
  const products = await productModel
    .find({})
    .populate({ path: "maker", model: userModel });
  res.json(products);
};
