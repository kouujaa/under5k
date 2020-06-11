const config = require("config");
const express = require("express");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const { Customer, validateCustomer } = require("../../../models/Customer");
const authenticate = require("../../../middleware/authenticate");

const router = express.Router();
// //testing code for all
// router.get("/", authenticate, async (req, res) => {
//   const customer = await Customer.find();
//   if (!customer) return res.status(400).send("User does not exist");
//   res.send(customer);
// });

//Login---required user name and password
router.post("/login", async (req, res) => {
  const { userName, password } = req.body;

  //CHECK IF USER EXISTS
  let customer = await Customer.findOne({ userName });
  if (!customer) return res.status(400).send("invalid login credentials");
  //COMPARE WITH HASH PASSWORD TO SEE IF PASSWORD IS CORRECT
  const validPassword = await bcrypt.compare(password, customer.password);
  if (!validPassword) return res.status(400).send("invalid login credentials");

  //RETRIEVE USER INFO EXCEPT PASSWORD
  customer = await Customer.findOne({ userName }).select(
    "meta purchasePriceTotal firstName lastName address phoneNumber userName email cart _id state gender dob dateJoined"
  );
  const token = jwt.sign(
    {
      _id: customer._id,
      userName: customer.userName,
      email: customer.email,
      FirtName: customer.firstName,
      lastName: customer.lastName,
      phoneNumber: customer.phoneNumber,
      state: customer.state,
      gender: customer.gender,
      datejoined: customer.dateJoined,
      purchasePriceTotal: customer.purchasePriceTotal,
      meta: customer.meta,
      cart: customer.cart,
      dob: customer.dob,
      address: customer.address
    },
    config.get("jwtPrivateKey")
  );
  console.log(token);
  return res.send(token);
  // res.header("x-authentication-token", token).send(`login successful`);
});

//SIGN-UP ----REQUIRED PROFILE INFO !!DONE
router.post("/signUp", async (req, res) => {
  //Validate req.body input
  try {
    const value = await validateCustomer.validateAsync(req.body);
  } catch (error) {
    return res.status(400).send(error.details[0].message);
  }

  //extract variables for checks
  let { email, userName, phoneNumber } = req.body;

  //check if email already in use
  let found = await Customer.findOne({ email });
  if (found) return res.status(400).send("email already taken");

  //check if username already in use
  found = await Customer.findOne({ userName });
  if (found) return res.status(400).send("user name taken");

  // check if phone number already in use
  found = await Customer.findOne({ phoneNumber });
  if (found) return res.status(400).send("phone number already in use");

  //hash password
  let { password } = req.body;
  const salt = await bcrypt.genSalt(12);
  const hashedpass = await bcrypt.hash(password, salt);
  req.body.password = hashedpass;

  //save to database
  const customer = new Customer({
    userName: req.body.userName,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    dob: req.body.dob,
    gender: req.body.gender,
    state: req.body.state
  });

  try {
    const saveditem = await customer.save();
    const token = jwt.sign(
      {
        _id: saveditem._id,
        userName: saveditem.userName,
        email: saveditem.email,
        FirtName: saveditem.firstName,
        lastName: saveditem.lastName,
        phoneNumber: saveditem.phoneNumber,
        state: saveditem.state,
        gender: saveditem.gender,
        datejoined: saveditem.datejoined,
        purchasePriceTotal: saveditem.purchasePriceTotal,
        meta: saveditem.meta
      },
      config.get("jwtPrivateKey")
    );

    // res.header("x-authentication-token", token).send(`signup successful`);
    return res.send(token);
  } catch (err) {
    return res.status(500).send(`customer signup failed: ${err.message}`);
  }
});

// FIND AND RETURN SINGULAR CUSTOMER DETAILS
router.get("/info", authenticate, async (req, res) => {
  const customer = await Customer.findOne({ userName: username });
  if (!customer) return res.status(400).send("User does not exist");
  _.filter(customer, []);
  res.send(customer);
});

//Update profile info	 authenticate
router.post("/updateProfile", authenticate, async (req, res) => {
  const {
    userName,
    firstName,
    lastName,
    address,
    email,
    phoneNumber
  } = req.body;

  try {
    const saveditem = await Customer.findOneAndUpdate(
      { email: email },
      { $set: { userName, firstName, lastName, address, email, phoneNumber } }
    );

    return res.send("update successfull");
  } catch (err) {
    return res.status(500).send(`update failed: ${err.message}`);
  }
});

//Change customer password authenticate
router.post("/changePassword", authenticate, async (req, res) => {});

//View customer meta data	authenticate
router.get("/metaData", authenticate, async (req, res) => {});

//add product to cart authenticate
router.post("/addToCart", async (req, res) => {});

//Check out from cart authenticate
router.get("/checkout", authenticate, async (req, res) => {
  const cart = req.cart;
});

module.exports = router;
