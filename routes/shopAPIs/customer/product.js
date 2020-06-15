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

  res.send(products);
});

//add a product
router.post("/addProduct", async (req, res) => {
  const { picInfo, picURL } = req.body;

  const product = new Product({});

  // const product = new Product({});
});

module.exports = router;
