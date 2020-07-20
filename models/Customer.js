const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: 2,
    maxlength: 200,
    required: true
  },
  signBy: {
    type: String,
    enum: ["site", "google", "facebook"],
    default: "site"
  },
  status: { type: String, default: "user" },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 200,
    required: true
  },
  googleID: { type: String },
  facebookID: { type: String },
  password: {
    type: String,
    minlength: 2,
    maxlength: 1020
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 8,
    maxlength: 1000
  },
  userName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 500,
    unique: true
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    minlength: 3,
    maxlength: 10
  },
  dob: {
    type: String
  },
  state: {
    type: String,
    minlength: 2,
    maxlength: 500
  },
  address: {
    type: String,
    minlength: 2,
    maxlength: 500
  },
  phoneNumber: {
    type: Number,
    min: 2,
    max: 999999999999
  },
  dateJoined: { type: Date, default: Date.now },
  purchasePriceTotal: {
    type: Number,
    default: 0
  },
  purchasedCount: {
    type: Number,
    min: 0,
    max: 99999999,
    default: 0
  },
  likedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  savedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  cart: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, default: "" },
      quantity: { type: Number, default: 0 }
    }
  ]
});
customerSchema.plugin(uniqueValidator);

const Customer = mongoose.model("customer", customerSchema);

const validateCustomer = Joi.object({
  firstName: Joi.string()
    .min(3)
    .max(50)
    .required(),
  lastName: Joi.string()
    .min(3)
    .max(50)
    .required(),
  password: Joi.string()
    .min(3)
    .max(50),
  userName: Joi.string()
    .min(3)
    .max(50)
    .required(),
  email: Joi.string()
    .min(8)
    .max(500)
    .email()
    .required(),
  address: Joi.string()
    .min(3)
    .max(500),
  googleID: Joi.string()
    .min(15)
    .max(500),
  facebookID: Joi.string()
    .min(15)
    .max(500),
  phoneNumber: Joi.number(),
  gender: Joi.string()
    .min(3)
    .max(10),
  dob: Joi.string(),
  state: Joi.string()
    .min(3)
    .max(20)
});

exports.customerSchema = customerSchema;
exports.Customer = Customer;
exports.validateCustomer = validateCustomer;
