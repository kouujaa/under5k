const express = require("express");
const { Product } = require("../../../models/Product");
const router = express.Router();
const {
  provideId
} = require("../../../helperUserValidators/productIDProvider");

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
  console.log("reached");
  console.log(req.body);
  // try {
  //   console.log("reached tryblock");
  //   const { picInfo, picURL } = req.body;

  //   console.log(parseInt(req.body));

  //   const product = new Product({
  //     productID: provideId(),
  //     instock: parseInt(picInfo.numberInStock),
  //     price: parseInt(picInfo.price),
  //     colors: picInfo.colors,
  //     fitting: picInfo.sizes,
  //     productTitle: picInfo.itemDescription,
  //     category: picInfo.category,
  //     URI: picURL,
  //     seller: "testSeller"
  //   });

  //   console.log("reachedschema");

  //   var data = await product.save();
  //   console.log("reached save");
  //   console.log(data);
  //   return res.send("item saved");
  // } catch (err) {
  //   console.log("reached err");
  //   console.log(err);
  //   return res.status(404).send("internal error");
  // }
  return res.send("done");
});

module.exports = router;
