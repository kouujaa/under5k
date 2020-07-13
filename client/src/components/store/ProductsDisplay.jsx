import React, { Component } from "react";
import Product from "./Product";
import Filters from "./sort&filters/filters/filteringcomponenets/Filters";
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
    let show = "";
    show = this.props.cart ? "allProducts mt-5 ml-5" : "allProducts mt-5";
    return (
      <div>
        <div className="sandf mb-2">
          <Filters
            products={this.props.products}
            handleUpSubmit={this.props.handleUpSubmit}
            selectedSize={this.props.selectedSize}
            currentCategory={this.props.currentCategory}
            currentSeller={this.props.currentSeller}
            currentSize={this.props.currentSize}
          />

          <Sorts handleSort={this.props.handleSort} />
        </div>

        <div className={show}>{this.displayall()}</div>
        <div className="container"></div>
      </div>
    );
  }
}

export default ProductDisplay;
