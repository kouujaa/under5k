import React, { Component } from "react";
import Product from "./Product";
import Sorts from "./sort&filters/sorts/Sorts";
import StoreFilter2 from "../store/sort&filters/filters/filteringcomponenets/StoreFilters2";

class StoreProductDisplay extends Component {
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
    return (
      <div>
        <div className="sandf2">
          <Sorts handleSort={this.props.handleSort} />
        </div>

        <div className="allProducts mt-3">{this.displayall()}</div>
      </div>
    );
  }
}

export default StoreProductDisplay;
