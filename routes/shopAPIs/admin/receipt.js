const express = require("express");
const { Receipt } = require("../../../models/Receipt");
const router = express.Router();

//receive message
router.post("/receipt", async (req, res) => {
  console.log();
  try {
    const { refNumber, email, charge, itemIDS } = req.body;

    const itemID = itemIDS.map(item => item.productID);
    console.log(refNumber, email, charge, itemID);
    const receipt = new Receipt({
      refNumber,
      email,
      charge: charge / 100,
      itemIDS: itemID
    });

    var data = await receipt.save();
    console.log(data);
    return res.send(data);
  } catch (err) {
    console.log(err);
    return res.status(500).redirect("/checkOut");
  }
});

module.exports = router;
