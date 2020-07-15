import React, { Component } from "react";
import { Link } from "react-router-dom";
import SellerSignInPage from "./SellerSignInPage";
import jwtDecoder from "jwt-decode";
import { withCookies, Cookies } from "react-cookie";

class SellerHomePage extends Component {
  state = { user: "" };

  componentDidMount() {
    try {
      const { cookies } = this.props;
      const jwt = cookies.get("token");
      if (jwt) {
        const user = jwtDecoder(jwt);
        // console.log(user);
        this.setState({ user });
      }
      if (!jwt) {
      }
    } catch (err) {}

    // this.populateState();
  }
  // async populateState() {
  //   try {
  //     const products = await axios.get("/api/product/");

  //     this.setState({ products: products.data });
  //   } catch (err) {
  //     // this.populateState();
  //   }
  // }
  render() {
    const { user } = this.state;

    return (
      <div>
        {!user && (
          <div className="container center">
            <SellerSignInPage />
            <span>new user?....</span>
            <Link to="/sellerSignUp">Sign Up</Link>
          </div>
        )}
        {user && (
          <Link to="sellerDashBoard">
            <div className="container center mt-5">
              <h5>PROCEED TO SELLER PORTAL</h5>
            </div>
          </Link>
        )}
      </div>
    );
  }
}

export default withCookies(SellerHomePage);
