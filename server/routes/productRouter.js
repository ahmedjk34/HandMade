const router = require("express").Router();

const {
  getProducts,
  fetchProduct,
  fetchRecommendedProducts,
} = require("../Controllers/productController");

router.get("/", getProducts);
router.post("/recommended", fetchRecommendedProducts);
router.get("/:id", fetchProduct);
module.exports = router;
