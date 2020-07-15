const config = require("config");
const express = require("express");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const { Customer, validateCustomer } = require("../../../models/Customer");
const { Receipt, validateReceipt } = require("../../../models/Receipt");
const authenticate = require("../../../middleware/authenticate");

const router = express.Router();

//Login---required user name and password
router.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  try {
    //CHECK IF USER EXISTS
    let customer = await Customer.findOne({ userName });
    if (!customer) return res.status(400).send("invalid login credentials");
    //COMPARE WITH HASH PASSWORD TO SEE IF PASSWORD IS CORRECT
    const validPassword = await bcrypt.compare(password, customer.password);
    if (!validPassword)
      return res.status(400).send("invalid login credentials");

    //RETRIEVE USER INFO EXCEPT PASSWORD
    customer = await Customer.findOne({ userName }).select(
      "meta purchasePriceTotal firstName lastName address phoneNumber userName email cart _id state gender dob dateJoined"
    );
    const token = jwt.sign(
      {
        status: "user",
        _id: customer._id,
        userName: customer.userName,
        email: customer.email,
        firstName: customer.firstName,
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

    return res
      .header("x-authentication-token", token)
      .cookie("token", token)
      .send("login-succesful");
  } catch (err) {
    return res.status(500).redirect("/serverError");
  }
});

//Google Login---required user name
router.post("/loginDirect", async (req, res) => {
  try {
    const { userName } = req.user;
    //CHECK IF USER EXISTS
    let customer = await Customer.findOne({ userName }).select(
      "meta purchasePriceTotal firstName lastName address phoneNumber userName email cart _id state gender dob dateJoined"
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
        state: customer.state,
        gender: customer.gender,
        datejoined: customer.dateJoined,
        purchasePriceTotal: customer.purchasePriceTotal,
        dob: customer.dob,
        address: customer.address
      },
      config.get("jwtPrivateKey")
    );
    return res
      .header("x-authentication-token", token)
      .cookie("token", token)
      .send("login-succesful");
  } catch (err) {
    return res.status(500).redirect("/serverError");
  }
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
        status: "user",
        _id: saveditem._id,
        userName: saveditem.userName,
        email: saveditem.email,
        firstName: saveditem.firstName,
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
    return res
      .header("x-authentication-token", token)
      .cookie("token", token)
      .redirect("/home");
  } catch (err) {
    return res.status(500).redirect("/serverError");
  }
});

// FIND AND RETURN SINGULAR CUSTOMER DETAILS
router.get("/info", authenticate, async (req, res) => {
  const customer = await Customer.findOne({ userName: username });
  if (!customer) return res.status(400).send("User does not exist");
  _.filter(customer, []);
  res.send(customer);
});

// FIND AND RETURN SINGULAR CUSTOMER DETAILS
router.post("/receipts", async (req, res) => {
  const { email } = req.body;
  const receipts = await Receipt.find({ email });
  if (!receipts) return res.status(400).send("no purchase history available ");
  // _.filter(receipts, []);
  res.send(receipts);
});

//Update profile info	 authenticate
router.post("/updateProfile", async (req, res) => {
  const {
    userName,
    firstName,
    lastName,
    address,
    phoneNumber
  } = req.body.details;
  const { email } = req.body;

  try {
    await Customer.findOneAndUpdate(
      { email },
      { $set: { userName, firstName, lastName, address, phoneNumber } }
    );

    return res.send("update successfull");
  } catch (err) {
    console.log(err.message);
    return res.status(500).redirect("/serverError");
  }
});

//add product to cart authenticate
router.post("/addToCart", async (req, res) => {});

//Change customer password authenticate
router.post("/updatePurchase", authenticate, async (req, res) => {});

//View customer meta data	authenticate
router.get("/metaData", authenticate, async (req, res) => {});

//add product to cart authenticate
router.post("/addToCart", async (req, res) => {});

//Check out from cart authenticate
router.get("/checkout", authenticate, async (req, res) => {
  const cart = req.cart;
});

module.exports = router;
