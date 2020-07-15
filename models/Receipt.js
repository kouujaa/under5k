const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const receiptSchema = new mongoose.Schema({
  refNumber: String,
  email: String,
  charge: Number,
  itemIDS: { type: [String] },
  dateOfPurchase: { type: Date, default: Date.now }
});

receiptSchema.plugin(uniqueValidator);

const Receipt = mongoose.model("receipt", receiptSchema);

const validateReceipt = Joi.object({
  refNumber: Joi.string().required(),
  email: Joi.string().required(),
  charge: Joi.number().required(),
  itemIDS: Joi.array()
});
exports.receiptSchema = receiptSchema;
exports.Receipt = Receipt;
exports.validateReceipt = validateReceipt;
