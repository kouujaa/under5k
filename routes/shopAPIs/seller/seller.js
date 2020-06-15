const config = require("config");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Seller, validateSeller } = require("../../../models/Seller");
const authenticate = require("../../../middleware/authenticate");

const router = express.Router();

router.get("/", async (req, res) => {
  const { shopName } = req.body;
  const seller = await Seller.findOne({ shopName }).select(
    "meta purchasePriceTotal firstName lastName address phoneNumber shopName email cart _id"
  );
  res.send(seller);
});

//SIGN-UP ----REQUIRED PROFILE INFO !!DONE
router.post("/signUp", async (req, res) => {
  //Validate req.body input
  try {
    const value = await validateSeller.validateAsync(req.body);
  } catch (error) {
    return res.status(400).send(error.details[0].message);
  }

  //extract variables for checks
  let { email, shopName, phoneNumber } = req.body;

  //check if email already in use
  let found = await Seller.findOne({ email });
  if (found) return res.status(400).send("email already taken");

  //check if shopName already in use
  found = await Seller.findOne({ shopName });
  if (found) return res.status(400).send("user name taken");

  // check if phone number already in use
  found = await Seller.findOne({ phoneNumber });
  if (found) return res.status(400).send("phone number already in use");

  //hash password
  let { password } = req.body;
  const salt = await bcrypt.genSalt(12);
  const hashedpass = await bcrypt.hash(password, salt);
  req.body.password = hashedpass;

  //save to database
  const seller = new Seller({
    shopName: req.body.shopName,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    dob: req.body.dob,
    gender: req.body.gender,
    state: req.body.state,
    accountName: req.body.accountName,
    accountNumber: req.body.accountNumber,
    bank: req.body.bank
  });

  try {
    const seller = await seller.save();
    const token = jwt.sign(
      {
        _id: seller._id,
        shopName: seller.shopName,
        email: seller.email,
        firstName: seller.firstName,
        lastName: seller.lastName,
        address: seller.address,
        accountName: seller.accountName,
        accountNumber: seller.accountNumber,
        bank: seller.bank,
        phoneNumber: seller.phoneNumber,
        dob: seller.dob,
        gender: seller.gender,
        state: seller.state
      },
      config.get("jwtPrivateKey")
    );

    // res.header("x-authentication-token", token).send(`signup successful`);
    return res.send(token);
  } catch (err) {
    return res.status(500).send(`Seller signup failed: ${err.message}`);
  }
});

//LOGIN---required shop name and password
router.post("/login", async (req, res) => {
  const { shopName, password } = req.body;

  //CHECK IF USER EXISTS
  let seller = await Seller.findOne({ shopName });
  if (!seller) return res.status(400).send("invalid login credentials");
  //COMPARE WITH HASH PASSWORD TO SEE IF PASSWORD IS CORRECT
  const validPassword = await bcrypt.compare(password, seller.password);
  if (!validPassword) return res.status(400).send("invalid login credentials");

  //RETRIEVE USER INFO EXCEPT PASSWORD
  seller = await Seller.findOne({ shopName }).select(
    "meta purchasePriceTotal firstName lastName address phoneNumber shopName email cart _id"
  );
  const token = jwt.sign(
    {
      _id: seller._id,
      shopName: seller.shopName,
      email: seller.email,
      firstName: seller.firstName,
      lastName: seller.lastName,
      address: seller.address,
      accountName: seller.accountName,
      accountNumber: seller.accountNumber,
      bank: seller.bank,
      phoneNumber: seller.phoneNumber,
      dob: seller.dob,
      gender: seller.gender,
      state: seller.state
    },
    config.get("jwtPrivateKey")
  );
  return res.send(token);
  // res.header("x-authentication-token", token).send(`login successful`);
});
// router.post("/", async (req, res) => {});

module.exports = router;
