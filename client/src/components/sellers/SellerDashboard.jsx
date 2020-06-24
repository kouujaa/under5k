import React, { Component } from "react";
import { Route } from "react-router-dom";
import UploadProduct from "./UploadProduct";
import ManageStore from "./ManageStore";
import ShopDetails from "./ShopDetails";
import SideOptions from "./SideOptions";
import jwtDecoder from "jwt-decode";
import axios from "axios";

class SellerDasboard extends Component {
  state = { user: "", products: "" };

  async componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      if (jwt) {
        const user = jwtDecoder(jwt);
        this.setState({ user });
        // set state and call for seller info

        const products = await axios.get("/api/product/byShop", {
          shopName: user.shopName
        });
        this.setState({ products: products.data });
      }
      if (!jwt) {
      }
    } catch (err) {}

    // this.populateState();
  }
  render() {
    const { user, products } = this.state;
    console.log(user);
    return (
      <div className="sellerdash">
        <h2 className="left">Welcome seller name</h2>
        <div className="productPage">
          <div>
            <SideOptions />
          </div>
          <div>
            <Route path="/sellerDashBoard/uploadProduct">
              <UploadProduct />
            </Route>
            <br />
            <Route path="/sellerDashBoard/manageStore">
              <ManageStore products={products} />
            </Route>
            <br />
            <Route path="/sellerDashBoard/shopdetails">
              <ShopDetails user={user} />
            </Route>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default SellerDasboard;
