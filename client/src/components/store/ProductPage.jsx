import React, { Component } from "react";
import axios from "axios";
// import Options from "./Options";
import ProductDisplay from "./ProductsDisplay";
import Cart from "./Cart";
import _ from "lodash";
import Paginate from "./../all/Pagination";

class ProductPage extends Component {
  state = {
    cart: [],
    products: [],
    pageSize: 9,
    currentPage: 1
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

  async populateState() {
    try {
      const products = await axios.get("/api/product/");

      this.setState({ products: products.data });
    } catch (err) {
      // this.populateState();
    }
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  componentDidMount() {
    this.populateState();
  }
  render() {
    const { pageSize, currentPage } = this.state;
    console.log(this.state.products);
    return (
      <React.Fragment>
        {/* { this.props.location.state?: <} */}
        {/* <AppNavBar /> */}
        <div className="productPage mt-5 ml-3">
          {/* <Options /> */}
          <Cart
            className="mr-3"
            cart={this.state.cart}
            inc={this.incrementCart}
            dec={this.decrementCart}
            rem={this.removeFromCart}
          />
          <ProductDisplay
            className="container ml-4"
            products={this.state.products}
            addToCart={this.addToCart}
          />
        </div>
        <Paginate
          onPageChange={this.handlePageChange}
          itemsCount={this.state.products.length}
          pageSize={pageSize}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default ProductPage;
