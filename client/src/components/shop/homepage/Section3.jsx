import React, { Component } from "react";
// import Carousel from "@brainhubeu/react-carousel";
import { NavLink } from "react-router-dom";
// import "@brainhubeu/react-carousel/lib/style.css";
import axios from "axios";

import _ from "lodash";

class TopSellers extends Component {
  state = {
    toppers: ""
  };

  //go to shop
  handleClick(shopName) {
    window.open("http://www.thriftnhub.com/store/" + shopName);
  }

  //load sellers
  async componentDidMount() {
    const sellers = await axios.get("/api/seller/sellersList");
    console.log(sellers.data);
    var sorted = _.orderBy(sellers.data, ["totalSales"], ["desc"]);
    const toppers = _.slice(sorted, 0, 4).reverse();
    this.setState({ toppers });
  }

  render() {
    const { toppers } = this.state;

    return (
      <React.Fragment>
        <div className="mt-5 mb-5 center">
          <h4 style={{ color: "#ff006c" }}>Top Sellers</h4>

          {toppers
            ? toppers.map(item => (
                <NavLink to={"/store/" + item.shopName} className="ml-3">
                  <img
                    width="120em"
                    height="170em"
                    style={{ borderRadius: "4px" }}
                    key={item.shopName}
                    className="sec_img m-2"
                    src={item.banner}
                    alt="cat"
                  />
                </NavLink>
              ))
            : null}
        </div>
      </React.Fragment>
    );
  }
}

export default TopSellers;

/* <React.Fragment>
<div className="mt-5 mb-5">
  <h4 style={{ color: "#ff006c" }}>Top Sellers</h4>
  <Carousel
    autoPlay={3500}
    animationSpeed={1000}
    infinite
    slidesPerScroll={1}
    slidesPerPage={5}
    offset={9}
  >
    {toppers
      ? toppers.map(item => (
         <NavLink to={"/store/:" + item.shopName}>
                  <img
                    key={item.shopName}
                    className="sec_img"
                    src={item.banner}
                    alt="cat"
                  />
                </NavLink>
        ))
      : null}
  </Carousel>
</div>
</React.Fragment> */
