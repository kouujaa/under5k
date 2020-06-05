import React, { Component } from "react";
import { motion } from "framer-motion";

class Jumbo extends Component {
  state = {
    items: []
  };

  render() {
    return (
      <React.Fragment>
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="jumbotron jumb">
            <div className="mt-5">
              <h1 className="display-4">TOP SELLER!!!</h1>
              <p className="lead jumbotxt">Discount offers</p>
              <p>Customer favorites selections</p>
              <p className="lead">
                <a
                  className="btn btn-primary btn-lg jumbotxt m-4"
                  href="#home"
                  role="button"
                >
                  VIEW SHOP
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </React.Fragment>
    );
  }
}

export default Jumbo;
