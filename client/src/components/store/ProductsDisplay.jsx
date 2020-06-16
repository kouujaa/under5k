import React, { Component } from "react";
import Product from "./Product";
import Filters from "./sort&filters/filters/filteringcomponenets/Filters";
import Sorts from "./sort&filters/sorts/Sorts";

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
        <div className="sandf mb-2">
          <Filters
            products={this.props.products}
            handleSizeFilter={this.props.handleSizeSelect}
            handleCategoryFilter={this.props.handleCategorySelect}
            handleSellerFilter={this.props.handleSellerSelect}
            selectedSize={this.props.selectedSize}
            currentCategory={this.props.currentCategory}
            currentSeller={this.props.currentSeller}
            currentSize={this.props.currentSize}
          />
          <Sorts handleSort={this.props.handleSort} />
        </div>

        <div className="allProducts container">{this.displayall()}</div>
        <div className="container"></div>
      </div>
    );
  }
}

export default ProductDisplay;
