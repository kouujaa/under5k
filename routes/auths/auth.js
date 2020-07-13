const config = require("config");
const express = require("express");
const bcrypt = require("bcrypt");
const path = require("path");
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
      " https://www.googleapis.com/auth/admin.directory.user.readonly"
    ]
  })
);

//google redirect

router.get(
  "/google/redirect",
  passport.authenticate("google"),
  async (req, res) => {
    console.log(req.user);
    const { userName } = req.user;
    try {
      //CHECK IF USER EXISTS
      let customer = await Customer.findOne({ userName }).select(
        "purchasePriceTotal firstName lastName phoneNumber userName email _id gender dateJoined"
      );
      if (!customer) return res.redirect("/signIn");

      //RETRIEVE USER INFO EXCEPT PASSWORD
      // customer = await Customer.findOne({ userName }).select(
      //   "meta purchasePriceTotal firstName lastName address phoneNumber userName email cart _id state gender dob dateJoined"
      // );
      const token = jwt.sign(
        {
          status: "user",
          _id: customer._id,
          userName: customer.userName,
          email: customer.email,
          firstName: customer.firstName,
          lastName: customer.lastName,
          phoneNumber: customer.phoneNumber,
          gender: customer.gender,
          datejoined: customer.dateJoined,
          purchasePriceTotal: customer.purchasePriceTotal,
          purchasedCount: 0,
          likedItems: [],
          savedItems: [],
          signBy: "google",
          googleID: "106361245312134885896"
        },
        config.get("jwtPrivateKey")
      );
      return res
        .header("x-authentication-token", token)
        .cookie("token", token)
        .redirect("http://localhost:3000/home");
    } catch (err) {
      console.log("from google/redirect", err);
      return res.status(500).redirect("http://localhost:3000/signIn");
    }

    // res.redirect("http://localhost:3000/");

    // res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
  }
);

module.exports = router;
