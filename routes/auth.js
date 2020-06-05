const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");

const token = jwt.sign({ name: "kelvin" }, config.get("jwtpkey"));

async function runhash() {
  const salt = await bcrypt.genSalt(10);
  const hashpword = await bcrypt.hash("kouujaa", salt);
  console.log(hashpword);
}

module.exports = runhash;
