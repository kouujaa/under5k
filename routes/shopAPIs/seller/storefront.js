const express = require("express");
const { Seller } = require("../../../models/Seller");
const { Product } = require("../../../models/Product");

const router = express.Router();

router.get("/storefront/:shopName", async (req, res) => {
  const { shopName } = req.query.shopName;
  const products = await Product.find({ seller: shopName });
  res.send(products);
});

module.exports = router;
