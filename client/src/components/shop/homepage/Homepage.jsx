import React, { Component } from "react";
import Jumbo from "./Jumbo";
import NewArrivals from "./Section1";
import TopCategories from "./Section2";
import TopSellers from "./Section3";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbo />
        {/* <NewArrivals products={this.props.products} />
        <TopCategories products={this.props.products} />
        <TopSellers products={this.props.products} /> */}
      </React.Fragment>
    );
  }
}

export default Home;
