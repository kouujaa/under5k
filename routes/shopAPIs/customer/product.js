const express = require("express");
const { Product } = require("../../../models/Product");
const router = express.Router();

var provideId = 1000020;
//find all by shop name
router.get("/:shopName", async (req, res) => {
  const { shopName } = req.params;
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
  console.log(req.body);
  try {
    const { picInfo, picURL } = req.body;

    const product = new Product({
      productID: provideId++,
      instock: parseInt(picInfo.numberInStock),
      price: parseInt(picInfo.price),
      colors: picInfo.colors,
      fitting: picInfo.sizes,
      productTitle: picInfo.itemDescription,
      category: picInfo.category,
      URI: picURL,
      seller: "testSeller"
    });

    var data = await product.save();

    return res.send(data);
  } catch (err) {
    console.log(err);
    return res.status(404).send("internal error");
  }
});

module.exports = router;
