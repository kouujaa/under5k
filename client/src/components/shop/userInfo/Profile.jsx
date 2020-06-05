import React, { Component } from "react";
class Profile extends Component {
  state = {};

  displayProfile = () => {
    console.log(this.props);
  };

  render() {
    const {
      // userName,
      email,
      FirtName,
      lastName,
      phoneNumber,
      purchasePriceTotal
      // meta
    } = this.props.profileInfo;
    return (
      <div>
        {this.displayProfile()}
        <h1> profile page</h1>
        <h4>
          <span>
            Full Name: {FirtName} {lastName}
          </span>
        </h4>
        <h4>
          <span>Email: {email}</span>
        </h4>
        <h4>
          <span>Address: </span>
        </h4>
        <h4>
          <span>dob:</span>
        </h4>
        <h4>
          <span>Phone number: 0{phoneNumber}</span>
        </h4>
        <h4>
          <span>state:</span>
        </h4>
        <h4>
          <span>gender:</span>
        </h4>
        <h4>
          <span>Date Joined:</span>
        </h4>
        <h4>
          <span>Total purchase:{purchasePriceTotal}</span>
        </h4>
        <h4>
          <span>Total Items purchased:</span>
        </h4>
        <h4>
          <span>Total Saved: </span>
        </h4>
      </div>
    );
  }
}

export default Profile;
