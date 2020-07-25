const express = require("express");
const { Receipt } = require("../../../models/Receipt");
const router = express.Router();

//receive message
router.post("/receipt", async (req, res) => {
  try {
    const { refNumber, email, charge, itemIDS, status } = req.body;

    const itemID = itemIDS.map(item => item.productID);

    const receipt = new Receipt({
      status,
      refNumber,
      email,
      charge: charge / 100,
      itemIDS: itemID
    });

    var data = await receipt.save();

    return res.send(data);
  } catch (err) {
    console.log("from receipt", err.message);
    return res.status(500).redirect("/checkOut");
  }
});

module.exports = router;
