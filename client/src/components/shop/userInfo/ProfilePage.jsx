import React, { Component } from "react";
import jwtDecoder from "jwt-decode";
import Profile from "./Profile";

class ProfilePage extends Component {
  state = { userInfo: {} };

  // async getInfo() {}

  populateState = () => {
    try {
      const jwt = localStorage.getItem("token");
      const userInfo = jwtDecoder(jwt);
      this.setState({ userInfo });
    } catch (error) {}
  };
  componentDidMount() {
    this.populateState();
  }

  render() {
    return <Profile profileInfo={this.state.userInfo} />;
  }
}

export default ProfilePage;
