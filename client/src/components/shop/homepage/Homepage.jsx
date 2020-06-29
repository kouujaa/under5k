import React, { Component } from "react";
import Jumbo from "./Jumbo";
import NewArrivals from "./Section1";
import TopCategories from "./Section2";
import TopSellers from "./Section3";
import ProductContext from "./../../../contexts/productContext";

class Home extends Component {
  static contextType = ProductContext;

  render() {
    return (
      <ProductContext.Consumer>
        {productContext => (
          <React.Fragment>
            <Jumbo />
            <NewArrivals products={productContext.products} />
            <TopCategories products={productContext.products} />
            <TopSellers products={productContext.products} />
          </React.Fragment>
        )}
      </ProductContext.Consumer>
    );
  }
}

export default Home;
