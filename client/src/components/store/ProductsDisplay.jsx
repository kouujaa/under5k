import React, { Component } from "react";
import Product from "./Product";

class ProductDisplay extends Component {
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
