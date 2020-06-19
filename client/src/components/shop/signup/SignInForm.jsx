import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

// import { awaitExpression } from "@babel/types";

class SignInForm extends Component {
  state = {
    status: null,
    cred: { userName: "", password: "" }
  };

  //populate state from input
  onChangeHandler = input => e => {
    const userInfo = { ...this.state.cred };
    userInfo[e.target.name] = e.target.value;
    this.setState({ cred: userInfo });
  };

  //async axios call
  async getInfo() {
    const { userName, password } = this.state.cred;
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
        state: { message: "invalid login credentials!" }
      });
    }
  }

  onSubmitHandler = e => {
    e.preventDefault();
    this.getInfo();
  };
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
          <FormGroup>
            <Label for="exampleEmail">UserName</Label>
            <Input
              name="userName"
              bsSize="lg"
              required
              onChange={this.onChangeHandler("userName")}
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

export default SignInForm;
