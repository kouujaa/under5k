import React, { Component } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Link, Route } from "react-router-dom";
import EditSellerProfile from "./EditSellerProfile";
import axios from "axios";

class ShopDetails extends Component {
  state = {};

  async componentDidMount() {
    try {
      const products = await axios.get("/api/product/");

      this.setState({ products: products.data });
    } catch (err) {
      // this.populateState();
    }
  }
  render() {
    const {
      accountName,
      accountNumber,
      address,
      bank,
      dob,
      email,
      firstName,
      gender,
      lastName,
      phoneNumber,
      shopName,
      state,
      meta
    } = this.props.details;

    return (
      <div className="container mt-5">
        <div>
          <Card>
            <CardHeader>
              <h1> Seller Profile Page</h1>
            </CardHeader>
            <CardBody>
              <h4>
                <span>Shop Name: {shopName}</span>
              </h4>
              <h4>
                <span>
                  Full Name: {firstName} {lastName}
                </span>
              </h4>
              <h4>
                <span>Email: {email}</span>
              </h4>
              <h4>
                <span>Address: {address}</span>
              </h4>
              <h4>
                <span>dob:{dob}</span>
              </h4>
              <h4>
                <span>Phone number:0{phoneNumber} </span>
              </h4>
              <h4>
                <span>state: {state}</span>
              </h4>
              <h4>
                <span>gender: {gender}</span>
              </h4>

              <h4>
                <span>Bank Name:{bank}</span>
              </h4>

              <h4>
                <span>Account Name:{accountName}</span>
              </h4>
              <h4>
                <span>Account Number:{accountNumber} </span>
              </h4>
              <h4>
                <span>Monthly Visits:{meta.monthlyVisits} </span>
              </h4>
              <h4>
                <span>Total Monthly Sales:{meta.totalMonthlySales} </span>
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
