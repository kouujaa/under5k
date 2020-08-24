const config = require("config");
const express = require("express");
const jwt = require("jsonwebtoken");
const { Customer } = require("../../models/Customer");
const passport = require("passport");

const router = express.Router();
//
//google sign in
router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "openid",
      "profile",
      "email",
      "https://www.googleapis.com/auth/user.phonenumbers.read",
      "https://www.googleapis.com/auth/user.addresses.read"
    ]
  })
);
// "https://www.googleapis.com/auth/admin.directory.user.readonly",// try again later
//google redirect

router.get(
  "/google/redirect",
  passport.authenticate("google"),
  async (req, res) => {
    const { email } = req.user;
    try {
      //CHECK IF USER EXISTS
      let customer = await Customer.findOne({ email }).select(
        "purchasePriceTotal status firstName dob address lastName phoneNumber state userName email gender dateJoined purchasedCount "
      );
      if (!customer) return res.redirect("/signIn");

      const token = jwt.sign(
        {
          status: customer.status,
          userName: customer.userName,
          email: customer.email,
          firstName: customer.firstName,
          lastName: customer.lastName,
          state: customer.state,
          address: customer.address,
          phoneNumber: customer.phoneNumber,
          gender: customer.gender,
          datejoined: customer.dateJoined,
          purchasePriceTotal: customer.purchasePriceTotal,
          purchasedCount: customer.purchasedCount,
          signBy: "google"
        },
        config.get("jwtPrivateKey")
      );
      return res
        .header("x-authentication-token", token)
        .cookie("token", token)
        .redirect("/home");
    } catch (err) {
      console.log("from google/redirect", err);
      return res.status(500).redirect("/signIn");
    }

    // res.redirect("http://localhost:3000/");

    // res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
  }
);

module.exports = router;
