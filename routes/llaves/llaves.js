const config = require("config");
const express = require("express");

const authenticate = require("../../middleware/authenticate");

const router = express.Router();

// pics storage
router.get("/pStoreLlaves", authenticate, async (req, res) => {
  const load = {
    uno: config.get("GCLOUD_PROJECT_ID"),
    dos: config.get("GCLOUD_APPLICATION_CREDENTIALS"),
    tres: config.get("GCLOUD_STORAGE_BUCKET_URL")
  };
  res.send(load);
});

//paystack
router.get("/ppstackLlaves", async (req, res) => {
  const load = { uno: config.get("pagerllave") };
  res.send(load);
});

// router.post("/addToCart", async (req, res) => {});
module.exports = router;
