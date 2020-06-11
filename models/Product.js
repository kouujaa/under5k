const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const productSchema = new mongoose.Schema({
  productID: {
    type: String,
    required: true,
    min: 0,
    max: 40,
    unique: true
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
  colors: [String],
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
  producTitle: { type: String, required: true },
  material: {
    type: [String],
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
  seller: {
    sellerID: { type: mongoose.Schema.Types.ObjectId, ref: "Seller" },
    name: { type: String, required: true, minlength: 1, maxlength: 25 }
  },
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

async function putproduct(item) {
  const {
    productID,
    price,
    colors,
    fitting,
    producTitle,
    material,
    category,
    URI,
    sellerName
  } = item;

  const product = new Product({
    productID,
    price,
    colors,
    fitting,
    producTitle,
    material,
    category,
    URI,
    sellerName
  });
  try {
    const saveditem = await product.save();

    return saveditem;
  } catch (err) {
    console.log(err.message);
  }
}
const enterthis = {
  productID: "A00003",
  price: 6500,
  colors: ["red", "yellow", "multicolor"],
  fitting: ["XXS", "XS", "S", "M", "L", "XL"],
  producTitle: "sexy flower pattern double slit gown",
  material: ["Cotton"],
  category: ["Dress"],
  URI: [
    "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90087653_155090732623218_4909097977760666215_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6TcX_6ME5xwAX-ZL-Nd&oh=b89b1a0c67d6911dc64777b73ca80f37&oe=5ED5D1BD"
  ],
  sellerName: {
    name: "eleanor"
  }
};
// const logit = putproduct(enterthis);
// console.log(logit);

// function validateProduct(product) {
const validateProduct = Joi.object({
  productID: Joi.string()
    .min(3)
    .max(50)
    .required(),
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
exports.putproduct = putproduct;
