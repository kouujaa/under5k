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

  // console.log(parseInt(picInfo.price));

  const product = new Product({
    instock: parseInt(picInfo.numberInStock),
    price: parseInt(picInfo.price),
    colors: picInfo.colors,
    fitting: picInfo.sizes,
    productTitle: picInfo.itemDescription,
    category: picInfo.category,
    URI: picURL,
    seller: "testSeller"
  });

  try {
    var data = await product.save();
    console.log(data);
    return res.send("item saved");
  } catch (err) {
    console.log(err);
    return res.status(404).send("internal error");
  }
});

module.exports = router;
