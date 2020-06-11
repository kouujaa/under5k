// const config = require("config");
const express = require("express");
const bcrypt = require("bcrypt");
const path = require("path");
// const _ = require("lodash");
// const jwt = require("jsonwebtoken");
const passport = require("passport");
// const { Customer, validateCustomer } = require("../../../models/Customer");
// const authenticate = require("../../../middleware/authenticate");

const router = express.Router();

//google sign in
router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "openid",
      "profile",
      "email",
      "https://www.googleapis.com/auth/user.phonenumbers.read"
      //   " https://www.googleapis.com/auth/admin.directory.user.readonly"
    ]
  })
);

//google redirect

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  //   res.redirect("http://localhost:3000/home");
  res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
});

module.exports = router;
