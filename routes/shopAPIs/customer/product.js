const express = require("express");
const { Product } = require("../../../models/Product");
const router = express.Router();
const _ = require("lodash");

router.post("/byShop", async (req, res) => {
  const { shopName } = req.body;
  try {
    const products = await Product.find({
      seller: shopName
    });
    return res.send(products);
  } catch (err) {
    console.log("from by shop product API", err.message);
    return res.status(500).redirect("/serverError");
  }
});

router.post("/byShop/by", async (req, res) => {
  const { shopName, by } = req.body;
  try {
    const products = await Product.find({
      seller: shopName,
      status: by
    });
    return res.send(products);
  } catch (err) {
    console.log("from by available product API", err.message);
    return res.status(500).redirect("/serverError");
  }
});

// router.post("/byShop/sold", async (req, res) => {
//   const { shopName } = req.body;

//   try {
//     const products = await Product.find({
//       seller: shopName,
//       status: "sold"
//     });
//     return res.send(products);
//   } catch (err) {
//     console.log("from sold product API", err.message);
//     return res.status(500).redirect("/serverError");
//   }
// });

//find all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});

    return res.send(products);
  } catch (err) {
    console.log("from get product API", err.message);
    return res.status(500).redirect("/serverError");
  }
});

//find all available products
router.get("/available", async (req, res) => {
  try {
    const products = await Product.find({ status: "available" });

    return res.send(products);
  } catch (err) {
    console.log("from by available product API", err.message);
    return res.status(500).redirect("/serverError");
  }
});

//find all sold products
router.get("/sold", async (req, res) => {
  try {
    const products = await Product.find({ status: "sold" });

    return res.send(products);
  } catch (err) {
    console.log("from sold product API", err.message);
    return res.status(500).redirect("/serverError");
  }
});

//add a products
router.post("/addProduct", async (req, res) => {
  try {
    const { picInfo, picURL, userInfo } = req.body;

    const product = new Product({
      productID: Date.now(),
      price: parseInt(picInfo.uploadinfo.price),
      color: picInfo.uploadinfo.colors,
      size: picInfo.uploadinfo.sizes,
      description: picInfo.uploadinfo.itemDescription,
      category: picInfo.uploadinfo.category,
      URI: picURL,
      seller: userInfo.shopName,
      material: picInfo.uploadinfo.material
    });

    var data = await product.save();

    return res.send(data);
  } catch (err) {
    console.log("from add product product API", err.message);
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
    console.log("from remove product API", err.message);
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
});

//bought status change
router.post("/updateMany", async (req, res) => {
  var cart = _.values(req.body.cart);
  cart = cart.map(each => {
    return each.productID;
  });

  try {
    cart.forEach(async productID => {
      await Product.updateOne(
        { productID },
        {
          $set: { status: req.body.status }
        }
      );
    });
  } catch (err) {
    console.log("from updatemany product API", err.message);
    return res.status(500).redirect("/serverError");
  }

  return res.send(cart);
});

//bought status change and stockpile
router.post("/stockpile", async (req, res) => {
  var cart = _.values(req.body.cart);
  cart = cart.map(each => {
    return each.productID;
  });

  try {
    cart.forEach(async productID => {
      await Product.updateOne(
        { productID },
        {
          $set: { status: req.body.status, piledBy: req.body.email }
        }
      );
    });
  } catch (err) {
    console.log("from updatemany product API", err.message);
    return res.status(500).redirect("/serverError");
  }

  return res.send(cart);
});


//add to stockpile
router.post("/deleteStockpile", async (req, res) => {
  // const { email, item, action } = req.body;
  console.log(req.body);
});

//add product to stockpile
router.post("/addStockpile", async (req, res) => {
  // const { email, item, action } = req.body;
  console.log(req.body);
});

//get stockpile by user
router.get("/stockpile", async (req, res) => {
  const {email} = req.body;
  
});
module.exports = router;
