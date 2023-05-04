const router = require("express").Router();

const {
  getProducts,
  fetchProduct,
  fetchRecommendedProducts,
  fetchMakerProducts,
} = require("../Controllers/productController");

router.get("/", getProducts);
router.post("/recommended", fetchRecommendedProducts);
router.get("/:id", fetchProduct);
router.get("/user/:id", fetchMakerProducts);
module.exports = router;
