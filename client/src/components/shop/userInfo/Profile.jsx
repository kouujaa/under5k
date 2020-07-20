import React, { Component } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Link, Route } from "react-router-dom";
import EditProfile from "./EditProfile";
import { motion } from "framer-motion";
import ViewReceipts from "./ViewReceipts";

class Profile extends Component {
  state = {};

  render() {
    const {
      // userName,
      email,
      firstName,
      lastName,
      phoneNumber,
      purchasePriceTotal,
      state,
      gender,
      dob,
      address
      // meta
    } = this.props.profileInfo;
    console.log(this.props);
    return (
      <motion.div
        className="container mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <Card>
            <CardHeader>
              <h1>Profile</h1>
            </CardHeader>
            <CardBody>
              <h4>
                <span>
                  Full Name: {firstName} {lastName}
                </span>
              </h4>
              <h4>
                <span>Email: {email}</span>
              </h4>
              <h4>
                <span>Address: {address ? address : "not provided"} </span>
              </h4>
              <h4>
                <span>Birthday: {dob ? dob : "not provided"}</span>
              </h4>
              <h4>
                <span>
                  Phone number:{" "}
                  {phoneNumber ? "0" + phoneNumber : "not provided"}
                </span>
              </h4>
              <h4>
                <span>state: {state ? state : "not provided"}</span>
              </h4>
              <h4>
                <span>gender: {gender ? gender : "not provided"}</span>
              </h4>

              <h4>
                <span>Total purchase: {purchasePriceTotal}</span>
              </h4>
              <Link to="/profilePage/receipts" className="btn">
                view orders
              </Link>
              <Card>
                <Route path="/profilePage/receipts">
                  <ViewReceipts email={email} />
                </Route>
              </Card>
            </CardBody>
          </Card>

          <Link to="/profilePage/updateProfile" className="btn">
            Edit Profile
          </Link>
        </div>
        <div>
          <Route path="/profilePage/updateProfile">
            <EditProfile info={this.props.profileInfo} />
          </Route>
        </div>
      </motion.div>
    );
  }
}

export default Profile;
