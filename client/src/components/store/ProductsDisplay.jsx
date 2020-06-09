import React, { Component } from "react";
import Product from "./Product";
import Filters from "./sort/filteringcomponenets/Filters";
import Sorts from "./sort/Sorts";

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
        <Filters
          products={this.props.products}
          handleFilter={this.props.handleSelect}
          selectedSize={this.props.selectedSize}
        />
        <Sorts handleSort={this.props.handleSort} />

        <div className="allProducts container">{this.displayall()}</div>
        <div className="container"></div>
      </div>
    );
  }
}

export default ProductDisplay;
