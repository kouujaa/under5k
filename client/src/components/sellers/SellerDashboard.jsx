import React, { Component } from "react";
import { Route } from "react-router-dom";
import UploadProduct from "./UploadProduct";
import ManageStore from "./ManageStore";
import ShopDetails from "./ShopDetails";
import SideOptions from "./SideOptions";

class SellerDasboard extends Component {
  render() {
    return (
      <div>
        <h2 className="left">Welcome seller name</h2>
        <div className="productPage">
          <div>
            <SideOptions />
          </div>
          <div>
            <Route
              path="/sellerDashBoard/uploadProduct"
              component={UploadProduct}
            ></Route>
            <br />
            <Route
              path="/sellerDashBoard/manageStore"
              component={ManageStore}
            ></Route>
            <br />
            <Route
              path="/sellerDashBoard/shopdetails"
              component={ShopDetails}
            ></Route>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default SellerDasboard;
