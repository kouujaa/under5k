import React, { Component } from "react";
import jwtDecoder from "jwt-decode";
import Profile from "./Profile";
import { withCookies } from "react-cookie";

class ProfilePage extends Component {
  state = { userInfo: {} };

  // async getInfo() {}

  componentDidMount() {
    try {
      const { cookies } = this.props;
      const jwt = cookies.get("token");
      const userInfo = jwtDecoder(jwt);
      this.setState({ userInfo });
    } catch (err) {
      console.log("from profile page comp", err.message);
    }
  }

  render() {
    const { userInfo } = this.state;
    return <Profile profileInfo={userInfo} />;
  }
}

export default withCookies(ProfilePage);
