const router = require("express").Router();

const {
  getProducts,
  fetchProduct,
  fetchRecommendedProducts,
  fetchMakerProducts,
  getPopularProducts,
  getSearchResults,
} = require("../Controllers/productController");

router.get("/", getProducts);
router.get("/popular", getPopularProducts);
router.post("/recommended", fetchRecommendedProducts);
router.get("/search", getSearchResults);
router.get("/:id", fetchProduct);
router.get("/user/:id", fetchMakerProducts);

module.exports = router;
