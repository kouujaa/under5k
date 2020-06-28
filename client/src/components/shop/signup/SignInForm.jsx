import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import SInput from "../../common/SInput";
import Joi from "joi-browser";
import UseForm from "./../../common/UseForm";

// import { awaitExpression } from "@babel/types";

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

  onGoogleSIgn = e => {
    window.open("http://localhost:3001/auth/google", "_self");
  };
  // showStatus = () => {
  //   return "enter login details";
  // };

  render() {
    return (
      <div className="signIn">
        <div className="btn btn-primary" onClick={this.onGoogleSIgn}>
          Sign in with Google
        </div>
        <Form
          className="container mt-5 siginform"
          onSubmit={this.onSubmitHandler}
        >
          <h3>Sign In</h3>
          <br></br>

          {this.renderInput("userName", "Username", "text")}

          {this.renderInput("password", "Password", "password")}

          {this.props.location.state ? (
            <p className="text-danger">{this.props.location.state.message}</p>
          ) : null}
          {this.renderButton("SIGN IN")}
        </Form>

        <br></br>
      </div>
    );
  }
}

export default SignInForm;
