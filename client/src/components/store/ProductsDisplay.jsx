import React, { Component } from "react";
import Product from "./Product";

class ProductDisplay extends Component {
  // const showproducts
  displayall = () => {
    const { products, addToCart } = this.props;

    const prod = products.map(product => (
      <Product key={product.productID} item={product} cartHandler={addToCart} />
    ));
    return prod;
  };

  componentDidMount() {
    this.displayall();
  }

  render() {
    return <div className="allProducts container">{this.displayall()}</div>;
  }
}

export default ProductDisplay;
