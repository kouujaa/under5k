import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

class EditSellerProfile extends Component {
  state = {
    userName: "",
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phoneNumber: 0
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
        firstName,
        lastName,
        address,
        email,
        phoneNumber
      } = this.state;

      await axios.post("/api/customers/updateProfile", {
        userName,
        firstName,
        lastName,
        address,
        email,
        phoneNumber
      });
      window.location = "/";
    } catch (err) {
      this.props.history.push({
        pathname: "/updateProfile",
        search: "",
        hash: "",
        state: { message: "Update Failed" }
      });
    }
  }

  onSubmitHandler = e => {
    e.preventDefault();
    this.getInfo();
  };
  componentDidMount() {
    // const {
    //   userName,
    //   firstName,
    //   lastName,
    //   address,
    //   email,
    //   phoneNumber
    // } = this.props;
    // this.setState({
    //   userName,
    //   firstName,
    //   lastName,
    //   address,
    //   email,
    //   phoneNumber
    // });
  }
  render() {
    const {
      userName,
      firstName,
      lastName,
      address,
      email,
      phoneNumber
    } = this.state;
    return (
      <div className="signUp">
        <Form
          className="container mt-5 sigupform"
          onSubmit={this.onSubmitHandler}
        >
          <h3>UPDATE</h3>
          <br></br>
          <FormGroup>
            <Label for="exampleEmail">Shop Name</Label>
            <Input
              bsSize="lg"
              value={userName}
              onChange={this.onChangeHandler("userName")}
              name="userName"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              value={firstName}
              bsSize="lg"
              onChange={this.onChangeHandler("userName")}
              name="firstName"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              value={lastName}
              bsSize="lg"
              onChange={this.onChangeHandler("lastName")}
              name="lastName"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              value={address}
              bsSize="lg"
              onChange={this.onChangeHandler("address")}
              name="address"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              value={email}
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
              value={phoneNumber}
              type="number"
              name="phoneNumber"
              id="phoneNumberr"
              required
              onChange={this.onChangeHandler("phoneNumber")}
            />
          </FormGroup>
          <FormGroup>
            <Label for="StateSelect">Location</Label>
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

export default EditSellerProfile;
