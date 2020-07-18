const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");

jwt.sign({ name: "kelvin" }, config.get("jwtPrivateKey"));

async function runhash() {
  const salt = await bcrypt.genSalt(10);
  await bcrypt.hash("kouujaa", salt);
}

module.exports = runhash;
