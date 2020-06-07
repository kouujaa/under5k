import React, { Component } from "react";
import Product from "./Product";
import Paginate from "./../all/Pagination";
import { pages } from "../../utils/pages";

class ProductDisplay extends Component {
  state = {
    pageSize: 0
  };
  // const showproducts

  displayall = () => {
    const { products, addToCart } = this.props;

    const prod = products.map(product => (
      <Product key={product.productID} item={product} cartHandler={addToCart} />
    ));
    return prod;
  };

  render() {
    return (
      <div>
        <div className="allProducts container">{this.displayall()}</div>
        <div className="container"></div>
      </div>
    );
  }
}

export default ProductDisplay;
