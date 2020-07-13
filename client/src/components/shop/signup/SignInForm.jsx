import React from "react";
import { Form } from "reactstrap";
import axios from "axios";
import Joi from "joi-browser";
import UseForm from "./../../common/UseForm";

// import { awaitExpression } from "@babel/types";
// import { order } from "./../../../store/actions/actions";
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
      await axios.post("/api/customers/login", {
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

  onGoogleSign = async e => {
    try {
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
    return (
      <div className="signIn">
        <div className="container mt-5 siginform">
          <div className="container center"></div>
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
