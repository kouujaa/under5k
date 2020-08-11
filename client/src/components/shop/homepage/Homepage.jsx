import React, { Component } from "react";
import Jumbo from "./Jumbo";
import NewArrivals from "./Section2"; //
import ADSense from "./Section1";
import TopSellers from "./Section3";
import ProductContext from "./../../../contexts/productContext";
import { motion } from "framer-motion";

class Home extends Component {
  static contextType = ProductContext;

  render() {
    console.log(this.props);
    return (
      <ProductContext.Consumer>
        {productContext => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <Jumbo />
            <ADSense products={productContext.products} />
            <TopSellers products={productContext.products} />
            <NewArrivals products={productContext.products} />
          </motion.div>
        )}
      </ProductContext.Consumer>
    );
  }
}

export default Home;
