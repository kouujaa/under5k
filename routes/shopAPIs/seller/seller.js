const config = require("config");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Seller, validateSeller } = require("../../../models/Seller");
const authenticate = require("../../../middleware/authenticate");

const router = express.Router();
//get seller info
router.get("/", async (req, res) => {
  const { shopName } = req.body;
  try {
    const seller = await Seller.findOne({ shopName }).select(
      "shopName storeURL email firstName totalVisits totalSales totalSoldItems lastName banner address accountName accountNumber bank phoneNumber dob gender state "
    );
    return res.send(seller);
  } catch (err) {
    return res.status(500).redirect("/serverError");
  }
});
//get banner URL
router.post("/banner", async (req, res) => {
  console.log(req.body);
  const { shopName } = req.body;
  try {
    const banner = await Seller.findOne({ shopName }).select("banner");
    return res.send(banner);
  } catch (err) {
    return res.status(500).redirect("/serverError");
  }
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

  try {
    const storeURL = "www.thriftnhub/store/" + req.body.shopName;

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
      bank: req.body.bank,
      storeURL
    });

    const data = await seller.save();
    const token = jwt.sign(
      {
        status: "seller",
        _id: data._id,
        shopName: data.shopName,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        accountName: data.accountName,
        accountNumber: data.accountNumber,
        bank: data.bank,
        phoneNumber: data.phoneNumber,
        dob: data.dob,
        gender: data.gender,
        state: data.state,
        meta: data.meta,
        banner: data.banner,
        totalVisits: data.totalVisits,
        totalSales: data.totalSales,
        totalSoldItems: data.totalSoldItems
      },
      config.get("jwtPrivateKey")
    );

    return res
      .header("x-authentication-token", token)
      .cookie("token", token)
      .send("signup-succesful");
  } catch (err) {
    return res.status(500).redirect("/serverError");
  }
});

//LOGIN---required shop name and password
router.post("/login", async (req, res) => {
  const { shopName, password } = req.body;

  //CHECK IF USER EXISTS
  try {
    let seller = await Seller.findOne({ shopName });
    if (!seller) return res.status(400).send("invalid login credentials");
    //COMPARE WITH HASH PASSWORD TO SEE IF PASSWORD IS CORRECT
    const validPassword = await bcrypt.compare(password, seller.password);
    if (!validPassword)
      return res.status(400).send("invalid login credentials");

    //RETRIEVE USER INFO EXCEPT PASSWORD
    const data = await Seller.findOne({ shopName }).select(
      "shopName storeURL email firstName totalVisits totalSales totalSoldItems lastName banner address accountName accountNumber bank phoneNumber dob gender state"
    );

    const token = jwt.sign(
      {
        status: "seller",
        _id: data._id,
        shopName: data.shopName,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        accountName: data.accountName,
        accountNumber: data.accountNumber,
        bank: data.bank,
        phoneNumber: data.phoneNumber,
        dob: data.dob,
        gender: data.gender,
        state: data.state,
        meta: data.meta,
        banner: data.banner,
        totalVisits: data.totalVisits,
        totalSales: data.totalSales,
        totalSoldItems: data.totalSoldItems,
        storeURL: data.storeURL
      },

      config.get("jwtPrivateKey")
    );
    return res
      .header("x-authentication-token", token)
      .cookie("token", token, { path: "/" })
      .send(token);
  } catch (err) {
    return res.status(500).redirect("/serverError");
  }

  // res.header("x-authentication-token", token).send(`login successful`);
});

//update metadat on sale
router.post("/updateMeta", async (req, res) => {
  // const {totalVisits,totalSoldItems,totalSales} = req.body.payload
  console.log(req.body);
  res.send("testing");
  // const { shopName } = req.body;
  // try {
  //   const banner = await Seller.findOne({ shopName }).select("banner");
  //   return res.send(banner);
  // } catch (err) {
  //   return res.status(500).redirect("/serverError");
  // }
});

module.exports = router;
