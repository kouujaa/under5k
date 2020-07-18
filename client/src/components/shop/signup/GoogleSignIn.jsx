import React, { Component } from "react";

import { ReactComponent as Google } from "../../svgs/google_logo.svg";
import { ReactComponent as Gmail } from "../../svgs/gmail.svg";
import { withCookies } from "react-cookie";

class GoogleSignIn extends Component {
  state = {
    status: null,
    data: { userName: "" }
  };

  onGoogleSign = e => {
    window.open("http://www.thriftnhub.com/auth/google", "_self");
    // window.open("/auth/google", "_self");
    // window.open("http://localhost:3001/auth/google", "_self");
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
            <Gmail height="1.8em" width="1.8em" className="mr-1" /> Quick Shop
            with Google
            <Google height="1.8em" width="1.8em" className="ml-1" />
          </div>
        </div>
      </div>
    );
  }
}

export default withCookies(GoogleSignIn);
