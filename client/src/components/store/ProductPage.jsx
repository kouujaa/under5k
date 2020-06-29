import React, { Component } from "react";
// import axios from "axios";
// import Options from "./Options";
import ProductDisplay from "./ProductsDisplay";
import Cart from "./Cart";
import _ from "lodash";
import Paginate from "./../all/Pagination";
import { pages } from "./../../utils/pages";
import { selectedSortFunc } from "./sort&filters/sorts/sorting";
import {
  SelectedSizeFilterFunction,
  SelectedCategoryFilterFunction
} from "./sort&filters/filters/filteringcomponenets/filtering";
import ProductContext from "./../../contexts/productContext";

class ProductPage extends Component {
  static contextType = ProductContext;

  state = {
    selectedSize: "",
    selectedSeller: "",
    selectedCategory: "",
    selectedSort: "",
    cart: [],
    pageSize: 6,
    currentPage: 1,
    currentSize: "",
    currentCategory: "",
    currentSeller: ""
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
      URI: URI[0]
    };
    const found = _.find(cart, { productID });
    if (found) {
      return;
    }
    cart.push(addProduct);
    this.setState({ cart });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSizeFilter = size => {
    this.setState({ selectedSize: size, currentPage: 1 });
    this.setState({ currentSize: size });
  };
  handleSellerFilter = seller => {
    this.setState({ selectedSeller: seller, currentPage: 1 });
    this.setState({ currentSeller: seller });
  };
  handleCategoryFilter = category => {
    this.setState({ selectedCategory: category, currentPage: 1 });
    this.setState({ currentCategory: category });
  };

  handleSort = sort => {
    this.setState({ selectedSort: sort });
  };
  componentDidMount() {}
  render() {
    const {
      pageSize,
      currentPage,
      selectedSize,
      selectedCategory,
      currentCategory,
      currentSeller,
      currentSize
    } = this.state;
    const { products } = this.context;
    let filtered = products;

    filtered = SelectedSizeFilterFunction(selectedSize, filtered);

    filtered = SelectedCategoryFilterFunction(selectedCategory, filtered);

    if (selectedSize === "All") {
      filtered = [...products];
    }
    filtered = selectedSortFunc(this.state.selectedSort, filtered);

    const sendDown = pages(filtered, currentPage, pageSize);

    return (
      <ProductContext.Consumer>
        {productContext => (
          <React.Fragment>
            <div className="productPage mt-5 ml-1">
              <Cart
                className="mr-3"
                cart={this.state.cart}
                inc={this.incrementCart}
                dec={this.decrementCart}
                rem={this.removeFromCart}
              />

              <ProductDisplay
                products={sendDown}
                addToCart={this.addToCart}
                onPageChange={this.handlePageChange}
                itemsCount={products.length}
                pageSize={pageSize}
                currentPage={currentPage}
                handleSizeSelect={this.handleSizeFilter}
                handleCategorySelect={this.handleCategoryFilter}
                handleSellerSelect={this.handleSellerFilter}
                selectedSize={this.state.selectedSize}
                handleSort={this.handleSort}
                currentCategory={currentCategory}
                currentSeller={currentSeller}
                currentSize={currentSize}
              />
            </div>
            <Paginate
              onPageChange={this.handlePageChange}
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
            />
          </React.Fragment>
        )}
      </ProductContext.Consumer>
    );
  }
}

export default ProductPage;
