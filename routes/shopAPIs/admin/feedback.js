const express = require("express");
const { FeedBack } = require("../../../models/FeedBack");
const router = express.Router();

//receive message
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const feedback = new FeedBack({
      name,
      email,
      subject,
      message
    });

    var data = await feedback.save();
    return res.redirect("/");
  } catch (err) {
    return res.status(500).redirect("/contact");
  }
});

module.exports = router;
