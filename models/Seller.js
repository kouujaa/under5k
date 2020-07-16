const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const sellerSchema = new mongoose.Schema({
  accountName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 500,
    unique: true
  },
  status: { type: String, default: "seller" },
  accountNumber: {
    type: Number,
    required: true,
    minlength: 2,
    maxlength: 16,
    unique: true
  },
  bank: {
    type: String,
    enum: [
      "Access Bank Plc",
      "CitiBank Nigeria Ltd",
      "Diamond Bank",
      "Ecobank Nigeria Plc",
      "FCMB",
      "Fidelity Bank Plc",
      "First Bank Of Nigeria Plc",
      "Guaranty Trust Bank Plc",
      "Heritage Bank",
      "Keystone Bank",
      "Polaris Bank Ltd",
      "StanBic IBTC Bank Plc",
      "Sterling Bank plc",
      "Union Bank Of Nigeria Plc",
      "United Bank of Africa Plc",
      "Wema Bank Plc",
      "Zenith Bank plc"
    ],
    required: true,
    minlength: 3,
    maxlength: 50
  },
  dob: {
    type: String,
    minlength: 2,
    maxlength: 200
  },
  storeURL: { type: String, minlength: 15 },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    minlength: 2,
    maxlength: 200
  },
  state: {
    type: String,
    enum: [
      "Abia",
      "Adamawa",
      "Akwa Ibom",
      "Anambra",
      "Bauchi",
      "Bayelsa",
      "Benue",
      "Borno",
      "CrossRIver",
      "Delta",
      "Ebonyi",
      "Edo",
      "Ekiti",
      "Enugu",
      "Gombe",
      "Imo",
      "Jigawa",
      "Kaduna",
      "Kano",
      "Katsina",
      "Kebbi",
      "Kogi",
      "Kwara",
      "Lagos",
      "Nasarawa",
      "Niger",
      "Ogun",
      "Ondo",
      "Osun",
      "Oyo",
      "Plateau",
      "River",
      "Sokoto",
      "Taraba",
      "Yobe",
      "Zamfara",
      "FCT"
    ],
    required: true,
    minlength: 3,
    maxlength: 18
  },
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 200
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 200
  },
  password: {
    type: String,
    required: true,
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
  shopName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 500,
    unique: true
  },
  phoneNumber: {
    type: Number,
    required: true,
    minlength: 2,
    maxlength: 16
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    }
  ],
  rating: { type: Number, default: 0 },
  address: { type: String, required: true, unique: true },
  totalVisits: { type: Number, default: 0 },
  totalSales: { type: Number, default: 0 },
  totalSoldItems: { type: Number, default: 0 },

  monthlyVisits: { type: Number, default: 0 },
  dailySoldItems: { type: Number, default: 0 },
  totalDailySales: { type: Number, default: 0 }
});

sellerSchema.plugin(uniqueValidator);

const Seller = mongoose.model("seller", sellerSchema);

const validateSeller = Joi.object({
  accountName: Joi.string()
    .min(3)
    .max(50)
    .required(),
  accountNumber: Joi.number().required(),
  bank: Joi.string()
    .min(3)
    .max(25)
    .required(),
  firstName: Joi.string()
    .min(3)
    .max(50)
    .required(),
  lastName: Joi.string()
    .min(3)
    .max(50)
    .required(),
  password: Joi.string()
    .min(6)
    .max(50)
    .required(),
  shopName: Joi.string()
    .min(2)
    .max(50)
    .required(),
  phoneNumber: Joi.number().required(),
  email: Joi.string()
    .min(8)
    .max(500)
    .required(),
  gender: Joi.string()
    .min(3)
    .max(10)
    .required(),
  dob: Joi.string().required(),
  state: Joi.string()
    .min(3)
    .max(20)
    .required(),
  address: Joi.string()
    .min(3)
    .max(500)
    .required()
});

exports.sellerSchema = sellerSchema;
exports.Seller = Seller;
exports.validateSeller = validateSeller;
