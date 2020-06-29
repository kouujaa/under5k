import React, { Component } from "react";
import SellerProduct from "./SellerProduct";

class SellerProductDisplay extends Component {
  state = {};

  displayall = () => {
    const { products, deleteHandler } = this.props;

    const prod = products.map(product => (
      <SellerProduct
        key={product.productID}
        item={product}
        deleteHandler={deleteHandler}
      />
    ));
    return prod;
  };
  render() {
    return <div className="allProducts mt-5">{this.displayall()}</div>;
  }
}

export default SellerProductDisplay;
