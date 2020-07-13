const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const adminSchema = new mongoose.Schema({
  section1: { type: [String], required: true },
  section2: { type: [String], required: true },
  section3: { type: [String], required: true },
  jumboInfo: { type: [String], required: true }
});

adminSchema.plugin(uniqueValidator);

const Admin = mongoose.model("admin", adminSchema);

const validateAdmin = Joi.object({
  section1: Joi.string()
    .min(3)
    .max(50)
    .required(),
  section2: Joi.string()
    .min(3)
    .max(50)
    .required(),
  section3: Joi.string()
    .min(3)
    .max(50),
  jumboInfo: Joi.string()
    .min(3)
    .max(50)
    .required()
});

exports.adminSchema = adminSchema;
exports.Admin = Admin;
exports.validateAdmin = validateAdmin;
