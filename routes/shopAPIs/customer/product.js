const express = require("express");
const { Product } = require("../../../models/Product");
const router = express.Router();
const _ = require("lodash");

router.post("/byShop", async (req, res) => {
  const { shopName } = req.body;
  console.log(shopName);
  try {
    const products = await Product.find({ seller: shopName });
    return res.send(products);
  } catch (err) {
    return res.status(500).redirect("/serverError");
  }
});

//find all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});

    return res.send(products);
  } catch (err) {
    return res.status(500).redirect("/serverError");
  }
});

//add a products
router.post("/addProduct", async (req, res) => {
  try {
    const { picInfo, picURL, userInfo } = req.body;

    const product = new Product({
      productID: Date.now(),
      instock: parseInt(picInfo.uploadinfo.numberInStock),
      price: parseInt(picInfo.uploadinfo.price),
      colors: picInfo.uploadinfo.colors,
      size: picInfo.uploadinfo.sizes,
      description: picInfo.uploadinfo.itemDescription,
      category: picInfo.uploadinfo.category,
      URI: picURL,
      seller: userInfo.shopName
    });

    var data = await product.save();
    console.log(data);
    return res.send(data);
  } catch (err) {
    return res.status(500).redirect("/serverError");
  }
});

//remove product
router.post("/remove", async (req, res) => {
  try {
    const { productID } = req.body;
    await Product.deleteOne({ productID });
    return res.send("Delete Succesfull");
  } catch (err) {
    return res.status(500).redirect("/serverError");
  }
});

//remove products
router.post("/removeMany", async (req, res) => {
  var cart = _.values(req.body.cart);
  cart = cart.map(each => {
    return each.productID;
  });
  return res.send(cart);
  // try {
  //   cart.forEach((item)=>{

  //   await Product.deleteOne({ productID:item.productID });
  //   return res.send("Delete Succesfull");
  //   })

  // } catch (err) {
  //   console.log(err);
  //   return res.status(404).send("internal error");
  // }
});

module.exports = router;
