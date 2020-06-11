const config = require("config");
const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi); //returns a function accepts the Joi class
const mongoose = require("mongoose");
const product = require("./routes/shopAPIs/customer/product");
const customer = require("./routes/shopAPIs/customer/customer");
const seller = require("./routes/shopAPIs/seller/seller");
const path = require("path");
const express = require("express");
const authRoute = require("./routes/auths/auth");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const graphqlHTTP = require("express-graphql");
const GraphSchema = require("./graphQLSchema/graphQLSchema");
const passportSetup = require("./configureauth/passport-setup");

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwt private key undefined");
  process.exit(1);
}
//
//mongodb://localhost/leanorcouture
mongoose
  .connect(
    "mongodb+srv://jjhok:jjhok@mydb-9j7ob.mongodb.net/test?authSource=admin&replicaSet=mydb-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use("/api/product", product);
app.use("/api/customers", customer);
app.use("/api/seller", seller);
app.use("/auth", authRoute);
app.use(
  "/graphapi",
  graphqlHTTP({
    schema: GraphSchema,
    graphiql: true
  })
);

//serve server in production

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
