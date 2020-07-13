const express = require("express");
const { Seller } = require("../../../models/Seller");
const { Product } = require("../../../models/Product");

const router = express.Router();

router.get("/storefront/:shopName", async (req, res) => {
  const { shopName } = req.query.shopName;
  try {
    const products = await Product.find({ seller: shopName }).select(
      "shopName email firstName banner lastName address accountName accountNumber bank phoneNumber dob gender state meta"
    );
    return res.send(products);
  } catch (err) {
    return res.status(500).redirect("/serverError");
  }
});

module.exports = router;
