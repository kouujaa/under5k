const express = require("express");
const { Product } = require("../../../models/Product");
const router = express.Router();

var provideId = 1000180;
//find all by shop name
router.get("/byShop", async (req, res) => {
  console.log(req.body);
  const { shopName } = req.body;
  const products = await Product.find({ shopName });
  res.send(products);
});

//find all produ cts
router.get("/", async (req, res) => {
  const products = await Product.find({});

  res.send(products);
});

//add a products
router.post("/addProduct", async (req, res) => {
  try {
    const { picInfo, picURL } = req.body;

    const product = new Product({
      productID: provideId++,
      instock: parseInt(picInfo.uploadinfo.numberInStock),
      price: parseInt(picInfo.uploadinfo.price),
      colors: picInfo.uploadinfo.colors,
      size: picInfo.uploadinfo.sizes,
      description: picInfo.uploadinfo.itemDescription,
      category: picInfo.uploadinfo.category,
      URI: picURL,
      seller: "testSeller"
    });

    var data = await product.save();
    console.log(data);
    return res.send(data);
  } catch (err) {
    console.log(err);
    return res.status(404).send("internal error");
  }
});

module.exports = router;
