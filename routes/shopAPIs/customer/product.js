const express = require("express");
const { Product } = require("../../../models/Product");
const router = express.Router();

//find all by shop name
router.get("/:shopName", async (req, res) => {
  const { shopName } = req.params;
  const products = await Product.find({ shopName });
  res.send(products);
});

//find all products
router.get("/", async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.send(products);
});

//update stock

module.exports = router;
