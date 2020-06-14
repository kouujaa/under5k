import React, { Component } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Link, Route } from "react-router-dom";
import EditSellerProfile from "./EditSellerProfile";

class ShopDetails extends Component {
  state = {};

  render() {
    // console.log(this.props);
    // const {
    //   // userName,
    //   email,
    //   FirtName,
    //   lastName,
    //   phoneNumber,
    //   purchasePriceTotal,
    //   state,
    //   gender,
    //   dob,
    //   address
    //   // meta
    // } = this.props.sellerInfo;

    return (
      <div className="container mt-5">
        <div>
          <Card>
            <CardHeader>
              <h1> Seller Profile Page</h1>
            </CardHeader>
            <CardBody>
              <h4>
                <span>Shop Name: bdrheh</span>
              </h4>
              <h4>
                <span>Full Name:dfhtr</span>
              </h4>
              <h4>
                <span>Email: sethg</span>
              </h4>
              <h4>
                <span>Address: nonwveb</span>
              </h4>
              <h4>
                <span>dob: 8579</span>
              </h4>
              <h4>
                <span>Phone number:546511216 </span>
              </h4>
              <h4>
                <span>state: delta</span>
              </h4>
              <h4>
                <span>gender: female</span>
              </h4>

              <h4>
                <span>Total Sold Items:84874 </span>
              </h4>
              <h4>
                <span>Total Sold:7897 </span>
              </h4>

              <h4>
                <span>Bank Name: GTB</span>
              </h4>

              <h4>
                <span>Account Name: thriftee</span>
              </h4>
              <h4>
                <span>Account Number: 546651689 </span>
              </h4>
              <h4>
                <span>Total Items In Stock: 87</span>
              </h4>
            </CardBody>
          </Card>
          <Link
            to="/sellerDashBoard/shopdetails/editSellerProfile"
            className="btn"
          >
            Edit Seller Profile
          </Link>
        </div>
        <div>
          <Route path="/sellerDashBoard/shopdetails/editSellerProfile">
            <EditSellerProfile />
          </Route>
        </div>
      </div>
    );
  }
}

export default ShopDetails;
