import React, { Component } from "react";
import Jumbo from "./Jumbo";
import NewArrivals from "./Section1";
import TopCategories from "./Section2";
import TopSellers from "./Section3";
import ProductContext from "./../../../contexts/productContext";
import { motion } from "framer-motion";

class Home extends Component {
  static contextType = ProductContext;

  render() {
    return (
      <ProductContext.Consumer>
        {productContext => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <Jumbo />
            <TopSellers products={productContext.products} />
            <NewArrivals products={productContext.products} />
            <TopCategories products={productContext.products} />
          </motion.div>
        )}
      </ProductContext.Consumer>
    );
  }
}

export default Home;
