const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const productSchema = new mongoose.Schema({
  productID: {
    type: Number,
    min: 0,
    unique: true
  },
  status: {
    type: String,
    enum: ["available", "sold", "carted", "stockpiled"],
    default: "available"
  },
  piledBy: { type: String, default: "" },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 200000
  },

  color: {
    type: String,
    enum: [
      "White",
      "Black",
      "Blue",
      "Red",
      "Green",
      "Purple",
      "Brown",
      "Pink",
      "Grey",
      "Beige",
      "Multi-Color",
      "Orange",
      "Yellow",
      "Indigo",
      "Violet",
      "Others"
    ]
  },
  size: {
    type: String,
    enum: [
      "6",
      "6-8",
      "8",
      "8-10",
      "10",
      "10-12",
      "12",
      "12-14",
      "14",
      "14-16",
      "16",
      "16-18",
      "18",
      "18-20",
      "20",
      "20-22",
      "22",
      "22-24",
      "24",
      "24-26",
      "26",
      "One Size"
    ]
  },
  description: { type: String, required: true },
  material: {
    type: String,
    enum: [
      "Polyester",
      "Silk",
      "Wool",
      "Rayon",
      "Chiffon",
      "Chinos",
      "Cotton",
      "Faux Fur",
      "Fur",
      "Denim",
      "Lace",
      "Latex",
      "Khaki",
      "Leather",
      "Linen",
      "Lycra",
      "Spandex",
      "Mesh",
      "Nylon",
      "Satin",
      "Synthetic Leather",
      "Velvet",
      "Others"
    ]
  },
  category: {
    type: String,
    enum: [
      "Blouses",
      "Bodysuits",
      "Bodycon",
      "Capris",
      "Coats",
      "Dresses",
      "Hoodies",
      "Jackets",
      "Jeans",
      "Jeggings",
      "Joggers",
      "Jumpsuits",
      "Lingerie",
      "Pants",
      "Playsuits",
      "Sets",
      "Shirts",
      "Shorts",
      "Skirts",
      "Suits",
      "Sweaters",
      "SweatShirts",
      "Swimsuit",
      "Tees",
      "Tops",
      "Trousers",
      "Others"
    ],
    required: true
  },
  dateAdded: { type: Date, default: Date.now },
  URI: { type: [String], required: true },
  // seller: {
  //   sellerID: { type: mongoose.Schema.Types.ObjectId, ref: "Seller" },
  //   name: { type: String, required: true, minlength: 1, maxlength: 25 }
  // },
  seller: { type: String, required: true },

  meta: {
    purchasedCount: { type: Number, default: 0 },
    likedCount: { type: Number, default: 0 },
    savedCount: { type: Number, default: 0 }
  },
  onDiscount: {
    discounted: {
      type: Boolean,
      default: false
    },
    dicountRate: {
      type: Number,
      required: function() {
        return this.discounted;
      }
    }
  },
  promo: {
    promoName: String,
    promoRate: Number
  }
});

productSchema.plugin(uniqueValidator);

const Product = mongoose.model("product", productSchema);

const validateProduct = Joi.object({
  productID: Joi.number().min(3),
  price: Joi.number()
    .min(1)
    .max(200000)
    .required(),
  color: Joi.array(),
  size: Joi.array(),
  description: Joi.string()
    .min(0)
    .max(400)
    .required(),
  material: Joi.array(),
  category: Joi.array().required(),
  URI: Joi.array().required(),
  seller: {
    name: Joi.string()
      .min(1)
      .max(50)
      .required()
  }
});

exports.productSchema = productSchema;
exports.Product = Product;
exports.validateProduct = validateProduct;
