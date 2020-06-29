import React, { Component } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Link, Route } from "react-router-dom";
import EditProfile from "./EditProfile";
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

    return (
      <div className="container mt-5">
        <div>
          <Card>
            <CardHeader>
              <h1> Customer Profile Page</h1>
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
                <span>Address: {address} </span>
              </h4>
              <h4>
                <span>dob: {dob}</span>
              </h4>
              <h4>
                <span>Phone number: 0{phoneNumber}</span>
              </h4>
              <h4>
                <span>state: {state}</span>
              </h4>
              <h4>
                <span>gender: {gender}</span>
              </h4>

              <h4>
                <span>Total purchase: {purchasePriceTotal}</span>
              </h4>
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
      </div>
    );
  }
}

export default Profile;
// <Link to="/updateProfile"></Link>
