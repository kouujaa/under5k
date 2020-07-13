const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true }
});

feedbackSchema.plugin(uniqueValidator);

const FeedBack = mongoose.model("feedback", feedbackSchema);

const validateProduct = Joi.object({
  name: Joi.string()
    .max(400)
    .required(),
  email: {
    name: Joi.string()
      .max(50)
      .required()
  },
  subject: {
    name: Joi.string()
      .max(50)
      .required()
  },
  message: {
    name: Joi.string().required()
  }
});

exports.feedbackSchema = feedbackSchema;
exports.FeedBack = FeedBack;
exports.validateProduct = validateProduct;
