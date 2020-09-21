import React, { Component } from "react";
import { Route } from "react-router-dom";
import UploadProduct from "./UploadProduct";
import ShopDetails from "./ShopDetails";
import SideOptions from "./SideOptions";
import jwtDecoder from "jwt-decode";
import axios from "axios";
import ViewOwnStore from "./ViewOwnStore";
import ViewSoldStore from "./ViewSoldStore";
import { withCookies } from "react-cookie";

class SellerDasboard extends Component {
  state = { user: "", products: "" };

  async componentDidMount() {
    const { cookies } = this.props;
    var jwt = cookies.get("token");
    var user = jwtDecoder(jwt);
    this.setState({ user });

    try {
      const { cookies } = this.props;
      // cookies.get("token")
      const products = await axios.post("/api/product/byShop", {
        shopName: jwtDecoder(cookies.get("token")).shopName
      });
      this.setState({ products: products.data });
    } catch (err) {}
  }

  getData = async () => {};

  render() {
    const { user, products } = this.state;

    return (
      <div className="sellerdash">
        <h2 className="left container">
          <span>{user.shopName} </span> Dashboard
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
            <br />
            <Route path="/sellerDashBoard/shopdetails">
              <ShopDetails user={user} />
            </Route>
            <br />
            <br />
            <Route path="/sellerDashBoard/viewSoldStore">
              <ViewSoldStore products={products} user={user} />
            </Route>
          </div>
        </div>
      </div>
    );
  }
}

export default withCookies(SellerDasboard);
