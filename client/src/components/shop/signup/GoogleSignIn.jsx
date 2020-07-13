import React, { Component } from "react";
import axios from "axios";
import { ReactComponent as Google } from "../../svgs/google_logo.svg";
import { ReactComponent as Gmail } from "../../svgs/gmail.svg";

class GoogleSignIn extends Component {
  state = {
    status: null,
    data: { userName: "" }
  };

  //async axios call
  async getInfo() {
    try {
      const token = await axios.get("/auth/google");
      localStorage.setItem("token", token.data);
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

  // onGoogleSign = async e => {
  //   try {
  //     console.log(this.props);
  //     const token = await axios.get("http://localhost:3001/auth/google");
  //     localStorage.setItem("token", token.data);

  //     window.location = "/";
  //   } catch (err) {
  //     console.log("err is: ", err.message);
  //   }
  // };
  componentDidMount = () => {};

  render() {
    return (
      <div className="signIn btn btn-white container center">
        <div className="" onClick={this.onGoogleSign}>
          <div href="http://localhost:3001/auth/google">
            <Gmail height="1.8em" width="1.8em" className="mr-4" /> Continue
            with Google
            <Google height="1.8em" width="1.8em" className="ml-4" />
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleSignIn;
