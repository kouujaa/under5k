import React, { Component } from "react";
import Product from "./Product";
import Sorts from "./sort&filters/sorts/Sorts";

class ProductDisplay extends Component {
  displayall = () => {
    const { products, addToCart } = this.props;
    if (products.length === 0) {
      return (
        <h1 className="float-right right">
          Out of stock for this filter. try another
        </h1>
      );
    }
    const prod = products.map(product => (
      <Product key={product.productID} item={product} cartHandler={addToCart} />
    ));
    return prod;
  };

  render() {
    console.log(this.props);
    let show = "";
    show = this.props.cart ? "allProducts mt-3 ml-2" : "allProducts mt-5";
    return (
      <div>
        <div className="sandf">
          <Sorts handleSort={this.props.handleSort} />
        </div>

        <div className={show}>{this.displayall()}</div>
      </div>
    );
  }
}

export default ProductDisplay;
