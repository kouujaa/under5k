import React, { Component } from "react";
import SellerProduct from "./SellerProduct";

class SellerSoldProductDisplay extends Component {
  state = {};

  displayall = () => {
    let { products, deleteHandler } = this.props;
    // products = products.filter(each => each.status === "sold");

    const prod = products.length ? (
      products.map(product => (
        <SellerProduct
          key={product.productID}
          item={product}
          deleteHandler={deleteHandler}
        />
      ))
    ) : (
      <h1>No Item Sold Yet</h1>
    );
    return prod;
  };
  render() {
    return <div className="allProducts mt-5">{this.displayall()}</div>;
  }
}

export default SellerSoldProductDisplay;
