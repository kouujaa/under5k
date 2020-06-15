import React, { Component } from "react";
import { Link } from "react-router-dom";
import SellerSignInPage from "./SellerSignInPage";

class SellerHomePage extends Component {
  state = {};

  render() {
    return (
      <div>
        <Link to="sellerDashBoard">
          <h5>PROCEED TO SELLER PORTAL</h5>
        </Link>
        <SellerSignInPage />
        <div className="container center">
          <span>new user?....</span>
          <Link to="/sellerSignUp">Sign Up</Link>
        </div>
      </div>
    );
  }
}

export default SellerHomePage;
