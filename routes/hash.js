const bcrypt = require("bcrpyt");

const salt = bcrypt.genSalt(10);

const hashedpass = await bcrypt.hash(password, salt);

const answer = bcrypt.compare(password, databasepassword);
 