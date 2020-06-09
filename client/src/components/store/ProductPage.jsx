import React, { Component } from "react";
// import axios from "axios";
// import Options from "./Options";
import ProductDisplay from "./ProductsDisplay";
import Cart from "./Cart";
import _ from "lodash";
import Paginate from "./../all/Pagination";
import { pages } from "./../../utils/pages";

class ProductPage extends Component {
  state = {
    selectedSize: "",
    selectedSort: "",
    cart: [],
    pageSize: 6,
    currentPage: 2
  };

  //handler for increasing quantity of given product
  incrementCart = id => {
    const found = _.find(this.state.cart, { productID: id });
    found.quantity++;
    const cart = [...this.state.cart];
    this.setState({ cart });
  };
  //handler for incresing quantity of given product
  decrementCart = id => {
    const found = _.find(this.state.cart, { productID: id });
    if (found.quantity === 1) {
      return;
    }
    found.quantity--;
    const cart = [...this.state.cart];
    this.setState({ cart });
  };

  //handler for incresing quantity of given product
  removeFromCart = id => {
    const cart = this.state.cart.filter(item => item.productID !== id);
    this.setState({ cart });
  };
  //add item to cart
  addToCart = (productID, description, size, price, URI) => {
    const cart = [...this.state.cart];
    const addProduct = {
      quantity: 1,
      productID,
      description,
      size,
      price,
      URI
    };
    const found = _.find(cart, { productID });
    if (found) {
      return;
    }
    cart.push(addProduct);
    this.setState({ cart });
  };

  // async populateState() {
  //   try {
  //     const products = await axios.get("/api/product/");

  //     this.setState({ products: products.data });
  //   } catch (err) {
  //     // this.populateState();
  //   }
  // }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  componentDidMount() {
    // this.populateState();
  }
  handleFilter = size => {
    this.setState({ selectedSize: size, currentPage: 1 });
  };
  handleSort = sort => {
    console.log(sort);
    this.setState({ selectedSort: sort });
  };

  render() {
    const { pageSize, currentPage, selectedSize } = this.state;
    const { products } = this.props;
    let filtered = selectedSize
      ? products.filter(product => product.sizes === selectedSize)
      : products;
    if (selectedSize === "All") {
      filtered = [...products];
    }
    if (this.state.selectedSort === "priceLowToHigh") {
      let sortedfilter = _.sortBy(filtered, function(o) {
        return o.price;
      });
      filtered = sortedfilter;
    }
    if (this.state.selectedSort === "NewArrivals") {
      let sortedfilter = _.sortBy(filtered, function(o) {
        return o.dateAdded;
      });
      filtered = sortedfilter;
    }
    if (this.state.selectedSort === "priceHighToLow") {
      let sortedfilter = _.sortBy(filtered, function(o) {
        return o.price;
      });
      filtered = sortedfilter;
    }
    const sendDown = pages(filtered, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="productPage mt-5 ml-3">
          <Cart
            className="mr-3"
            cart={this.state.cart}
            inc={this.incrementCart}
            dec={this.decrementCart}
            rem={this.removeFromCart}
          />

          <ProductDisplay
            className="container ml-4"
            products={sendDown}
            addToCart={this.addToCart}
            onPageChange={this.handlePageChange}
            itemsCount={products.length}
            pageSize={pageSize}
            currentPage={currentPage}
            handleSelect={this.handleFilter}
            selectedSize={this.state.selectedSize}
            handleSort={this.handleSort}
          />
        </div>
        <Paginate
          onPageChange={this.handlePageChange}
          itemsCount={filtered.length}
          pageSize={pageSize}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default ProductPage;
