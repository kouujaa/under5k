import React, { Component } from "react";
import jwtDecoder from "jwt-decode";
import Profile from "./Profile";

class ProfilePage extends Component {
  state = { userInfo: {} };

  // async getInfo() {}

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const userInfo = jwtDecoder(jwt);
      this.setState({ userInfo });
    } catch (error) {}
  }

  render() {
    const { userInfo } = this.state;
    return <Profile profileInfo={userInfo} />;
  }
}

export default ProfilePage;
