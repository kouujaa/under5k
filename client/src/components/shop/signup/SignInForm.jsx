import React from "react";
import { Form } from "reactstrap";
import axios from "axios";
import Joi from "joi-browser";
import UseForm from "./../../common/UseForm";

import { ReactComponent as Google } from "../../svgs/google_logo.svg";

import { ReactComponent as Gmail } from "../../svgs/gmail.svg";

// import { awaitExpression } from "@babel/types";
import { order } from "./../../../store/actions/actions";
import GoogleSignIn from "./GoogleSignIn";

class SignInForm extends UseForm {
  state = {
    status: null,
    data: { userName: "", password: "" },
    errors: {}
  };

  schema = {
    userName: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    this.getInfo();
  };

  //async axios call
  async getInfo() {
    const { userName, password } = this.state.data;
    try {
      const token = await axios.post("/api/customers/login", {
        userName,
        password
      });

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

  // onGoogleSign = e => {
  //   window.open("http://localhost:3001/auth/google", "_self");
  // };

  onGoogleSign = async e => {
    try {
      console.log(this.props);
      await axios.get("http://localhost:3001/auth/google");

      window.location = "/";
    } catch (err) {
      this.props.history.push({
        pathname: "/signIn",
        search: "",
        hash: "",
        state: { message: "invalid login dataentials!" }
      });
    }
  };
  // onFacebookSign = e => {
  //   window.open("http://localhost:3001/auth/facebook", "_self");
  // };
  // showStatus = () => {
  //   return "enter login details";
  // };

  render() {
    const { cookies } = this.props;
    console.log(cookies.get("token"));
    return (
      <div className="signIn">
        <div className="container mt-5 siginform">
          <div className="container center">
            {/* <div className="btn btn-danger ml-3" onClick={this.onFacebookSign}>
              Facebook <Face height="1.8em" width="1.8em" />
              (Instagram
              <Insta height="1.8em" width="1.8em" />)
            </div> */}
          </div>
          <Form className="container siginform" onSubmit={this.onSubmitHandler}>
            <h3>Sign In</h3>
            <br></br>

            {this.renderInput("userName", "Username", "text")}

            {this.renderInput("password", "Password", "password")}

            {this.props.location.state ? (
              <p className="text-danger">{this.props.location.state.message}</p>
            ) : null}
            {this.renderButton("SIGN IN")}
          </Form>
          <GoogleSignIn />
        </div>
      </div>
    );
  }
}

export default SignInForm;
