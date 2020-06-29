import React, { Component } from "react";
import { Route } from "react-router-dom";
import UploadProduct from "./UploadProduct";
import ShopDetails from "./ShopDetails";
import SideOptions from "./SideOptions";
import jwtDecoder from "jwt-decode";
import axios from "axios";
import ViewOwnStore from "./ViewOwnStore";

class SellerDasboard extends Component {
  state = { user: "", products: "" };

  componentDidMount() {
    var jwt = localStorage.getItem("token");
    if (jwt) {
      var user = jwtDecoder(jwt);
      this.setState({ user });
      // set state and call for seller info
      console.log(user);
    }
    if (!jwt) {
    }

    this.getData();
    // this.populateState();
  }

  getData = async () => {
    try {
      var products = await axios.get("/api/product/byShop", {
        shopName: this.state.user.shopName
      });
      this.setState({ products: products.data });
      console.log(products.data);
    } catch (err) {}
  };

  render() {
    const { user, products } = this.state;

    return (
      <div className="sellerdash">
        <h2 className="left container">
          <span>{user.shopName} </span> dasdboard
        </h2>
        <div className="productPage">
          <div>
            <SideOptions />
          </div>
          <div>
            <Route path="/sellerDashBoard/viewOwnStore">
              <ViewOwnStore products={products} user={user} />
            </Route>
            <br />
            <Route path="/sellerDashBoard/uploadProduct">
              <UploadProduct />
            </Route>

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
