import React, { Component } from "react";
import { Link } from "react-router-dom";

class SellerHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Link to="sellerDashBoard">
          <h5>Sign In With Facebook(Instagram)</h5>
        </Link>
      </div>
    );
  }
}

export default SellerHomePage;
