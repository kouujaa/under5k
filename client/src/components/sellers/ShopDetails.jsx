import React, { Component } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Link, Route } from "react-router-dom";
import EditSellerProfile from "./EditSellerProfile";
import axios from "axios";

class ShopDetails extends Component {
  state = { meta: {} };

  async componentDidMount() {
    console.log(this.props);
    this.setState({ meta: this.props });
    try {
      const products = await axios.get("/api/product/");

      this.setState({ products: products.data });
    } catch (err) {
      // this.populateState();
    }
  }
  render() {
    console.log(this.state);
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
      state
    } = this.props.user;

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

              {/* <h4>
                <span>Monthly Visits:{monthlyVisit} </span>
              </h4>
              <h4>
                <span>Total Monthly Sales:{totalMonthlySale}</span>
              </h4> */}
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
