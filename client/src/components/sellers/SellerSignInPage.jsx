import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
// import { awaitExpression } from "@babel/types";

class SellerSignInPage extends Component {
  state = {
    status: null,
    cred: { shopName: "", password: "" }
  };

  //populate state from input
  onChangeHandler = input => e => {
    const sellerInfo = { ...this.state.cred };
    sellerInfo[e.target.name] = e.target.value;
    this.setState({ cred: sellerInfo });
  };

  //async axios call
  async getInfo() {
    const { shopName, password } = this.state.cred;
    try {
      const token = await axios.post("/api/seller/login", {
        shopName,
        password
      });
      localStorage.setItem("token", token.data);
      window.location = "/";
    } catch (err) {
      this.props.history.push({
        pathname: "/sellerSignIn",
        search: "",
        hash: "",
        state: { message: "invalid login credentials!" }
      });
    }
  }

  onSubmitHandler = e => {
    e.preventDefault();
    this.getInfo();
  };

  // showStatus = () => {
  //   return "enter login details";
  // };

  render() {
    return (
      <div className="signIn">
        <Form
          className="container mt-5 siginform"
          onSubmit={this.onSubmitHandler}
        >
          <h3>Sign In Your Shop</h3>
          <br></br>
          <FormGroup>
            <Label for="shopName">shopName</Label>
            <Input
              name="shopName"
              bsSize="lg"
              required
              onChange={this.onChangeHandler("shopName")}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="password"
              id="Password"
              required
              onChange={this.onChangeHandler("password")}
            />
          </FormGroup>{" "}
          {this.props.location.state ? (
            <p className="text-danger">{this.props.location.state.message}</p>
          ) : null}
          <Button className="mt-4" type="submit">
            Sign In
          </Button>
        </Form>

        <br></br>
      </div>
    );
  }
}

export default SellerSignInPage;
