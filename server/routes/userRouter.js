const router = require("express").Router();

const { getUser } = require("../Controllers/userController");

router.get("/:id", getUser);

module.exports = router;
