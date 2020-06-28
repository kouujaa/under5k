import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
// import { awaitExpression } from "@babel/types";
import Joi from "joi-browser";
import UseForm from "./../common/UseForm";

class SellerSignInPage extends UseForm {
  state = {
    status: null,
    data: { shopName: "", password: "" },
    errors: {}
  };

  schema = {
    shopName: Joi.string()
      .required()
      .label("Shop Name"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    this.getInfo();
  };

  //async axios call
  async getInfo() {
    const { shopName, password } = this.state.data;
    try {
      const token = await axios.post("/api/seller/login", {
        shopName,
        password
      });
      localStorage.setItem("token", token.data);
      window.location = "/sellerDashBoard";
    } catch (err) {
      // this.props.history.push({
      //   pathname: "/sellerSignIn",
      //   search: "",
      //   hash: "",
      //   state: { message: "invalid login dataentials!" }
      // });
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="signIn">
        <Form
          className="container mt-5 siginform"
          onSubmit={this.onSubmitHandler}
        >
          <h3>Sign In Your Shop</h3>
          <br></br>

          {this.renderInput("shopName", "Shop Name", "text")}
          {this.renderInput("password", "Password", "password")}
          {/* {this.props.location.state ? (
            <p className="text-danger">{this.props.location.state.message}</p>
          ) : null} */}
          {this.renderButton("SIGN IN")}
        </Form>

        <br></br>
      </div>
    );
  }
}

export default SellerSignInPage;
