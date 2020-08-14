import React, { Component } from "react";
import axios from "axios";
import jwtDecoder from "jwt-decode";
import _ from "lodash";
import Paginate from "../../all/Pagination";
import { withCookies } from "react-cookie";
import { pages } from "../../../utils/pages";
import { motion } from "framer-motion";
import { selectedSortFunc } from "../sort&filters/sorts/sorting";
import StoreFilter2 from "../../store/sort&filters/filters/filteringcomponenets/StoreFilters2";
import { StoreFilterFunction } from "../sort&filters/filters/filteringcomponenets/filtering";
import StoreProductDisplay from "./../StoreProductDisplay";
import ProductContext from "./../../../contexts/productContext";

class StoreFront extends Component {
  static contextType = ProductContext;

  state = {
    selectedSize: "All",
    selectedCategory: "All",
    selectedSort: "",
    cart: [],
    pageSize: 6,
    currentPage: 1,
    currentSize: "ALL",
    currentCategory: "ALL",
    products: "",
    banner: ""
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

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSizeFilter = size => {
    this.setState({ selectedSize: size, currentPage: 1 });
    this.setState({ currentSize: size });
  };

  handleCategoryFilter = category => {
    this.setState({ selectedCategory: category, currentPage: 1 });
    this.setState({ currentCategory: category });
  };

  handleSort = sort => {
    this.setState({ selectedSort: sort });
  };

  handleUpSubmit = (category, size) => {
    this.setState({
      selectedCategory: category,
      selectedSize: size
    });
  };

  async componentDidMount() {
    // const seller = this.props.match.params.sellerName;
    //get products from this seller
    try {
      const products = await axios.post("/api/product/byShop", {
        shopName: this.props.match.params.sellerName
      });

      this.setState({ products: products.data });
    } catch (err) {
      console.log("from get products from this seller", err);
    }
    //get banner for store front
    try {
      const banner = await axios.post("/api/seller/banner", {
        shopName: this.props.match.params.sellerName
      });

      this.setState({ banner: banner.data.banner });
    } catch (err) {
      console.log("from get banner for store front", err);
    }
    //update visitors

    try {
      const { cookies } = this.props;
      const jwt = cookies.get("token");
      const user = jwtDecoder(jwt);

      await axios.post("/api/seller/updateVisit", {
        shopName: this.props.match.params.sellerName,
        status: user.status
      });
    } catch (err) {
      console.log("from update visitors", err);
    }
  }

  render() {
    const {
      pageSize,
      currentPage,
      selectedSize,
      selectedCategory,
      currentCategory,
      currentSize
    } = this.state;

    const { products } = this.state;

    let filtered = StoreFilterFunction(
      selectedCategory,
      selectedSize,
      products
    );

    filtered = selectedSortFunc(this.state.selectedSort, filtered);

    const sendDown = pages(filtered, currentPage, pageSize);

    return (
      <ProductContext.Consumer>
        {productContext => (
          <div className="storeFront">
            <div className="banner">
              <h1 className="center float-right mt-3 mr-1 bannerText">
                {this.props.match.params.sellerName.toUpperCase()} STORE
              </h1>
              <img
                className="picbanner"
                src={this.state.banner}
                alt="Bannerpicture"
              />
            </div>

            <motion.div
              className="productPage mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* {this.state.cart.length ? (
            <Cart
              className="mr-2"
              cart={this.state.cart}
              inc={this.incrementCart}
              dec={this.decrementCart}
              rem={this.removeFromCart}
            />
          ) : null} USE FOR ADSENSE */}
              <div className="pd2">
                <StoreFilter2
                  products={sendDown}
                  handleUpSubmit={this.handleUpSubmit}
                  selectedSize={this.state.selectedSize}
                  currentCategory={currentCategory}
                  currentSize={currentSize}
                />

                <StoreProductDisplay
                  products={sendDown}
                  addToCart={productContext.cartFunctions.addToCart}
                  onPageChange={this.handlePageChange}
                  itemsCount={products.length}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  handleSizeSelect={this.handleSizeFilter}
                  handleCategorySelect={this.handleCategoryFilter}
                  selectedSize={this.state.selectedSize}
                  handleSort={this.handleSort}
                  currentCategory={currentCategory}
                  currentSize={currentSize}
                  handleUpSubmit={this.handleUpSubmit}
                />
              </div>
            </motion.div>

            <Paginate
              onPageChange={this.handlePageChange}
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
            />
          </div>
        )}
      </ProductContext.Consumer>
    );
  }
}

export default withCookies(StoreFront);
