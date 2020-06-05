const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;
const mongoose = require("mongoose");
const { Product } = require("../models/Product");
const { Customer } = require("../models/Customer");

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    productID: { type: GraphQLID },
    instock: { type: GraphQLInt },
    rating: { type: GraphQLInt },
    price: { type: GraphQLInt },
    colors: { type: new GraphQLList(GraphQLString) },

    material: { type: new GraphQLList(GraphQLString) },
    category: { type: GraphQLString },
    dateAdded: { type: GraphQLString },
    URI: { type: new GraphQLList(GraphQLString) },
    seller: { type: GraphQLID }
    // meta: { type: GraphQLString },
    // onDiscount: { type: GraphQLString },
    // promo: { type: GraphQLString }
    // fitting: { type: new GraphQLList(GraphQLString) },
    // productTitle: { type: GraphQLString },
  })
});

const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    userName: { type: GraphQLString },
    gender: { type: GraphQLString },
    dob: { type: GraphQLString },
    state: { type: GraphQLString },
    address: { type: GraphQLString },
    phoneNumber: { type: GraphQLInt },
    dateJoined: { type: GraphQLString },
    meta: { type: GraphQLString },
    cart: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        const resp = await Product.findById(args.id);
        return resp;
      }
    },
    customer: {
      type: CustomerType,
      args: { userName: { type: GraphQLString } },
      async resolve(parent, args) {
        return await Customer.findOne({ userName: args.userName });
      }
    },
    customers: {
      type: CustomerType,
      async resolve(parent, args) {
        return await Customer.find({});
      }
    },
    products: {
      type: ProductType,
      async resolve(parent, args) {
        const prod = await Product.find({});
        return prod;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
