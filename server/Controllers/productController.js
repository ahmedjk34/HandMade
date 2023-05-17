const mongoose = require("mongoose");
const productModel = require("../Models/productModel");
const userModel = require("../Models/userModel");

exports.getProducts = async function (req, res) {
  try {
    const products = await productModel
      .find({})
      .select("title photo price  rating");
    res.json(products);
  } catch (error) {
    res.json(error.message);
  }
};
exports.getPopularProducts = async function (req, res) {
  try {
    const products = await productModel
      .find({})
      .select("title photo price")
      .limit(4);
    res.json(products);
  } catch (error) {
    res.json(error.message);
  }
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
exports.fetchMakerProducts = async function (req, res) {
  try {
    const userId = req.params.id;
    const products = await productModel
      .find({})
      .where("maker")
      .equals(userId)
      .select("title photo price rating");
    res.json(products);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

exports.getSearchResults = async function (req, res) {
  try {
    const { minPrice, maxPrice, categories } = req.query;
    const categoryFilters = [
      "Art",
      "Jewelry",
      "Kitchen",
      "Kids",
      "Phone Cases",
      "Wedding",
      "Pets",
      "Romantic",
    ];
    const products = await productModel
      .find({})
      .where("price")
      .gt(minPrice)
      .lt(maxPrice)
      .where("catagories")
      .in(categories || categoryFilters)
      .select("title photo price rating");
    console.log(req.query.categories);
    res.json(products);
  } catch (error) {
    res.json(error.message);
  }
};
