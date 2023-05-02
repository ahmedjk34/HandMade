const mongoose = require("mongoose");
const productModel = require("../Models/productModel");
const userModel = require("../Models/userModel");

exports.getProducts = async function (req, res) {
  const products = await productModel
    .find({})
    .populate({ path: "maker", model: userModel });
  res.json(products);
};
exports.fetchProduct = async function (req, res) {
  try {
    const id = req.params.id;
    const product = await productModel
      .findById(id)
      .populate({ path: "maker", model: userModel });
    res.json(product);
  } catch (err) {
    res.json(null);
  }
};
exports.fetchRecommendedProducts = async function (req, res) {
  try {
    const catagories = req.body.data.catagories;
    const id = req.body.data.id;
    const products = await productModel
      .find({})
      .where("catagories")
      .in(catagories)
      .where("_id")
      .ne(id);
    res.send(products.slice(0, 3));
  } catch (error) {
    console.log(error);
    res.json(null);
  }
};
