const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const productSchema = new mongoose.Schema({
  productID: {
    type: String,
    min: 0
    // unique: true
  },
  instock: {
    type: Number,
    default: 1,
    min: 0,
    max: 40
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 200000
  },

  colors: {
    type: String,
    enum: [
      "White",
      "Black",
      "Blue",
      "Red",
      "Green",
      "Brown",
      "Purple",
      "Pink",
      "Grey",
      "Beige",
      "Multi-Color"
    ]
  },
  fitting: {
    type: String,
    enum: [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL",
      "4XL",
      "OneSize",
      "All"
    ]
  },
  productTitle: { type: String, required: true },
  material: {
    type: String,
    enum: [
      "Polyester",
      "Silk",
      "Wool",
      "Rayon",
      "Cotton",
      "FauxFur",
      "Fur",
      "Leather",
      "Linen",
      "Spandex",
      "NYLON",
      "SyntheticLeather"
    ]
  },
  category: {
    type: String,
    enum: [
      "Hoodies",
      "Dresses",
      "Blouses",
      "SweatShirts",
      "Suits",
      "Jeans",
      "Skirts",
      "Pants",
      "Capris",
      "Swimsuit",
      "Shirts",
      "Sets",
      "Sweaters",
      "Jackets",
      "Bodysuits",
      "Jumpsuits",
      "Tees",
      "Coats",
      "Bottoms",
      "Tops",
      "Playsuits",
      "Jumpsuits",
      "Lingerie"
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
  productID: Joi.string().min(3),
  price: Joi.number()
    .min(1)
    .max(200000)
    .required(),
  colors: Joi.array(),
  fitting: Joi.array(),
  producTitle: Joi.string()
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
