import React, { Component } from "react";
import Product from "./Product";
import Sorts from "./sort&filters/sorts/Sorts";
import Filters2 from "./sort&filters/filters/filteringcomponenets/Filters";
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
        <div className="sandf">
          <StoreFilter2
            products={this.props.products}
            handleUpSubmit={this.props.handleUpSubmit}
            selectedSize={this.props.selectedSize}
            currentCategory={this.props.currentCategory}
            currentSize={this.props.currentSize}
          />

          <Sorts handleSort={this.props.handleSort} />
        </div>

        <div className="allProducts mt-5">{this.displayall()}</div>
        <div className="container"></div>
      </div>
    );
  }
}

export default StoreProductDisplay;
