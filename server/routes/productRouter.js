const { getPosts } = require("../Controllers/productController");

const router = require("express").Router();

router.get("/", getPosts);

module.exports = router;
