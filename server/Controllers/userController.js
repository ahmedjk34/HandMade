const mongoose = require("mongoose");
const userModel = require("../Models/userModel");

exports.getUser = async function (req, res) {
  try {
    const id = req.params.id;

    const user = await userModel.findById(id).select("-password");
    res.json(user);
  } catch (error) {
    res.json(error.message);
  }
};
