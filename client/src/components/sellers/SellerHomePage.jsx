import React, { Component } from "react";

class SellerHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h5>
          <a href="/uploadProduct">upload to your store</a>
        </h5>
        <h5>
          <a href="/manageStore">manage store</a>
        </h5>
        <h5>
          <a href="shopdetails">Shop and profile info</a>
        </h5>
      </div>
    );
  }
}

export default SellerHomePage;
