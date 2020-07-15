const config = require("config");
const express = require("express");

const authenticate = require("../../../middleware/authenticate");

const router = express.Router();

//get cloud keys
router.post("/imagekeys", authenticate, async (req, res) => {
  config.get();
});

//get paystack keys
router.get("/stackKeys", authenticate, async (req, res) => {});

//get google passport keys
router.get("/cardKeys", authenticate, async (req, res) => {});

// //get facebook passport keys
// router.post("/addToCart", async (req, res) => {});
module.exports = router;
