import React, { Component } from "react";
import axios from "axios";
import { ReactComponent as Google } from "../../svgs/google_logo.svg";
import { ReactComponent as Gmail } from "../../svgs/gmail.svg";
import { withCookies, Cookies } from "react-cookie";

class GoogleSignIn extends Component {
  state = {
    status: null,
    data: { userName: "" }
  };

  //async axios call
  async getInfo() {
    try {
      const token = await axios.get("/auth/google");
      const { cookies } = this.props;
      cookies.set("token", token.data, { path: "/" });
      // localStorage.setItem("token", token.data);
      window.location = "/";
    } catch (err) {
      this.props.history.push({
        pathname: "/signIn",
        search: "",
        hash: "",
        state: { message: "invalid login dataentials!" }
      });
    }
  }

  onGoogleSign = e => {
    window.open("http://localhost:3001/auth/google", "_self");
  };

  componentDidMount = () => {};

  render() {
    return (
      <div
        className="btn btn-white container center mt-3"
        style={{ width: "23em" }}
      >
        <div className="container center" onClick={this.onGoogleSign}>
          <div>
            <Gmail height="1.8em" width="1.8em" className="mr-1" /> Continue
            with Google
            <Google height="1.8em" width="1.8em" className="ml-1" />
          </div>
        </div>
      </div>
    );
  }
}

export default withCookies(GoogleSignIn);
