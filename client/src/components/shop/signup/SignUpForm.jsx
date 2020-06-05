import React, { Component } from "react";
import { Form, FormGroup, Label, Input, CustomInput, Button } from "reactstrap";
import axios from "axios";

class SignUpForm extends Component {
  state = {
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phoneNumber: 0,
    dob: "",
    gender: "",
    state: ""
  };

  onChangeHandler = input => e => {
    const userInfo = { ...this.state.userInfo };
    userInfo[e.target.name] = e.target.value;
    this.setState(userInfo);
  };
  async getInfo() {
    try {
      const {
        userName,
        password,
        firstName,
        lastName,
        address,
        email,
        phoneNumber,
        dob,
        gender,
        state
      } = this.state;

      const token = await axios.post("/api/customers/signUp", {
        userName,
        password,
        firstName,
        lastName,
        address,
        email,
        phoneNumber,
        dob,
        gender,
        state
      });
      localStorage.setItem("token", token.data);
      window.location = "/";
    } catch (err) {
      this.props.history.push({
        pathname: "/signUp",
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

  render() {
    return (
      <div className="signUp">
        <Form
          className="container mt-5 sigupform"
          onSubmit={this.onSubmitHandler}
        >
          <h3>Sign Up</h3>
          <br></br>
          <FormGroup>
            <Label for="exampleEmail">UserName</Label>
            <Input
              bsSize="lg"
              onChange={this.onChangeHandler("userName")}
              name="userName"
              required
              onFocus
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
          </FormGroup>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              bsSize="lg"
              onChange={this.onChangeHandler("userName")}
              name="firstName"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              bsSize="lg"
              onChange={this.onChangeHandler("lastName")}
              name="lastName"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              bsSize="lg"
              onChange={this.onChangeHandler("address")}
              name="address"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="email"
              name="email"
              id="Email"
              required
              onChange={this.onChangeHandler("email")}
            />
          </FormGroup>

          <FormGroup>
            <Label for="phoneNumberr">Phone Number</Label>
            <Input
              type="number"
              name="phoneNumber"
              id="phoneNumberr"
              required
              onChange={this.onChangeHandler("phoneNumber")}
            />
          </FormGroup>
          <FormGroup>
            <Label for="dob">Birthday</Label>
            <Input
              type="date"
              name="dob"
              id="dob"
              required
              onChange={this.onChangeHandler("dob")}
            />
          </FormGroup>
          <FormGroup>
            <Label for="sexSelect">Gender</Label>
            <Input
              type="select"
              name="gender"
              id="sexSelect"
              required
              onChange={this.onChangeHandler("gender")}
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="StateSelect">State</Label>
            <Input
              type="select"
              name="state"
              id="StateSelect"
              required
              onChange={this.onChangeHandler("state")}
            >
              <option>Abia</option>
              <option>Adamawa</option>
              <option>Akwa Ibom</option>
              <option>Anambra</option>
              <option>Bauchi</option>
              <option>Bayelsa</option>
              <option>Benue</option>
              <option>Borno</option>
              <option>CrossRIver</option>
              <option>Delta</option>
              <option>Ebonyi</option>
              <option>Edo</option>
              <option>Ekiti</option>
              <option>Enugu</option>
              <option>Gombe</option>
              <option>Imo</option>
              <option>Jigawa</option>
              <option>Kaduna</option>
              <option>Kano</option>
              <option>Katsina</option>
              <option>Kebbi</option>
              <option>Kogi</option>
              <option>Kwara</option>
              <option>Lagos</option>
              <option>Nasarawa</option>
              <option>Niger</option>
              <option>Ogun</option>
              <option>Ondo</option>
              <option>Osun</option>
              <option>Oyo</option>
              <option>Plateau</option>
              <option>River</option>
              <option>Sokoto</option>
              <option>Taraba</option>
              <option>Yobe</option>
              <option>Zamfara</option>
              <option>FCT</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCheckbox">Switches</Label>
            <div>
              <CustomInput
                type="switch"
                id="notifications"
                name="notifications"
                label="Turn on noification"
                required
                onChange={this.onChangeHandler("notifications")}
              />
              <CustomInput
                type="switch"
                id="exampleCustomSwitch2"
                name="agreement"
                required
                label="agree to customer agreement"
                onChange={this.onChangeHandler("agreement")}
              />
            </div>
          </FormGroup>
          <Button className="mt-4" type="submit">
            Submit
          </Button>
        </Form>
        <span></span>
        <br></br>
      </div>
    );
  }
}
export default SignUpForm;
