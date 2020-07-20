import React, { Component } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button, CustomInput } from "reactstrap";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import { motion } from "framer-motion";
import { withCookies } from "react-cookie";

class SellerSignUp extends Component {
  state = {
    data: {
      shopName: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      phoneNumber: "",
      dob: "",
      gender: "",
      state: "",
      bank: "",
      accountName: "",
      accountNumber: ""
    },
    errors: {}
  };

  schema = {
    shopName: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password"),
    firstName: Joi.string()
      .required()
      .label("First Name"),
    lastName: Joi.string()
      .required()
      .label("Last Name"),
    address: Joi.string()
      .required()
      .label("Address"),
    email: Joi.string()
      .required()
      .label("Email Address"),
    phoneNumber: Joi.number()
      .required()
      .label("Phone Number"),
    dob: Joi.string()
      .required()
      .label("Birthday"),
    gender: Joi.string()
      .required()
      .label("Gender"),
    state: Joi.string()
      .required()
      .label("State"),
    bank: Joi.string()
      .required()
      .label("Bank"),
    accountName: Joi.string()
      .required()
      .label("Account Name"),
    accountNumber: Joi.number()
      .required()
      .label("Account Number")
  };

  validate = () => {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    });

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) {
      return;
    }
    this.doSubmit();
  };

  onChangeHandler = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  // onChangeHandler = input => e => {
  //   const userInfo = { ...this.state.userInfo };
  //   userInfo[e.target.name] = e.target.value;
  //   this.setState(userInfo);
  // };
  doSubmit = () => {
    this.getInfo();
  };

  renderButton(label) {
    return (
      <Button disabled={this.validate()} className="mt-4" type="submit">
        {label}
      </Button>
    );
  }
  async getInfo() {
    try {
      const {
        shopName,
        password,
        firstName,
        lastName,
        address,
        accountName,
        accountNumber,
        bank,
        email,
        phoneNumber,
        dob,
        gender,
        state
      } = this.state.data;

      const token = await axios.post("/api/seller/signUp", {
        website: "www.thriftnhub.com/store/" + shopName,
        shopName,
        password,
        firstName,
        lastName,
        address,
        accountName,
        accountNumber,
        bank,
        email,
        phoneNumber,
        dob,
        gender,
        state
      });
      const { cookies } = this.props;
      cookies.set("token", token.data, { path: "/" });

      window.location = "/";
    } catch (err) {
      if (err.response) {
        console.log(err.response.data.err);
        this.setState({ errors: err.response.data.err + "!!!. Try another" });
      }
      this.props.history.push({
        pathname: "/",
        search: "",
        hash: "",
        state: { message: err.response.data.err + "!!!. Try another" }
      });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <motion.div
        className="signUp"
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Form
          className="container mt-5 sigupform"
          onSubmit={this.onSubmitHandler}
        >
          <h3>Sign Up</h3>
          <br></br>
          <FormGroup>
            <Label htmlFor="shopName">Shop Name</Label>
            <Input
              bsSize="lg"
              onChange={this.onChangeHandler}
              name="shopName"
              required
            />
            {errors["shopName"] && (
              <div className="alert alert-danger">{errors["shopName"]}</div>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="Password"
              required
              onChange={this.onChangeHandler}
            />
            {errors["password"] && (
              <div className="alert alert-danger">{errors["password"]}</div>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              bsSize="lg"
              onChange={this.onChangeHandler}
              name="firstName"
              required
            />
            {errors["firstName"] && (
              <div className="alert alert-danger">{errors["firstName"]}</div>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              bsSize="lg"
              onChange={this.onChangeHandler}
              name="lastName"
              required
            />
            {errors["lastName"] && (
              <div className="alert alert-danger">{errors["lastName"]}</div>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="address">Address</Label>
            <Input
              bsSize="lg"
              onChange={this.onChangeHandler}
              name="address"
              required
            />
            {errors["address"] && (
              <div className="alert alert-danger">{errors["address"]}</div>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="Email"
              required
              onChange={this.onChangeHandler}
            />
            {errors["email"] && (
              <div className="alert alert-danger">{errors["email"]}</div>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              required
              onChange={this.onChangeHandler}
            />
            {errors["phoneNumber"] && (
              <div className="alert alert-danger">{errors["phoneNumber"]}</div>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="bank">Bank</Label>
            <Input
              type="select"
              name="bank"
              id="bankSelect"
              required
              onChange={this.onChangeHandler}
            >
              <option>Select Bank</option>
              <option>Access Bank Plc</option>
              <option>CitiBank Nigeria Ltd</option>
              <option>Diamond Bank</option>
              <option>Ecobank Nigeria Plc</option>
              <option>FCMB</option>
              <option>Fidelity Bank Plc</option>
              <option>First Bank Of Nigeria Plc</option>
              <option>Guaranty Trust Bank Plc</option>
              <option>Heritage Bank</option>
              <option>Keystone Bank</option>
              <option>Polaris Bank Ltd</option>
              <option>StanBic IBTC Bank Plc</option>
              <option>Sterling Bank plc</option>
              <option>Union Bank Of Nigeria Plc</option>
              <option>United Bank of Africa Plc</option>
              <option>Wema Bank Plc</option>
              <option>Zenith Bank plc</option>
            </Input>
            {errors["bank"] && (
              <div className="alert alert-danger">{errors["bank"]}</div>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="accountName">Account Name</Label>
            <Input
              bsSize="lg"
              onChange={this.onChangeHandler}
              name="accountName"
              required
            />
            {errors["accountName"] && (
              <div className="alert alert-danger">{errors["accountName"]}</div>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="accountNumber">Account Number</Label>
            <Input
              bsSize="lg"
              onChange={this.onChangeHandler}
              name="accountNumber"
              required
            />
            {errors["accountNumber"] && (
              <div className="alert alert-danger">
                {errors["accountNumber"]}
              </div>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="dob">Birthday</Label>
            <Input
              type="date"
              name="dob"
              id="dob"
              required
              onChange={this.onChangeHandler}
            />
            {errors["dob"] && (
              <div className="alert alert-danger">{errors["dob"]}</div>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="gender">Gender</Label>
            <Input
              type="select"
              name="gender"
              id="sexSelect"
              required
              onChange={this.onChangeHandler}
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Input>
            {errors["ender"] && (
              <div className="alert alert-danger">{errors["ender"]}</div>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="state">State</Label>
            <Input
              type="select"
              name="state"
              id="StateSelect"
              required
              onChange={this.onChangeHandler}
            >
              <option>Select State</option>
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
            {errors["state"] && (
              <div className="alert alert-danger">{errors["state"]}</div>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="agreement">Switches</Label>
            <div>
              <CustomInput
                type="switch"
                id="userCustomSwitch"
                name="agreement"
                required
                label="agree to seller agreement"
              />
            </div>
          </FormGroup>
          <div>
            {this.props.location.state ? (
              <p className="text-danger">{this.props.location.state.message}</p>
            ) : null}
            {this.renderButton("SUBMIT")}
            <Link className="ml-3 mt-2" to="/sellerAgreement">
              seller Agreement
            </Link>
          </div>
        </Form>
        <span></span>
        <br></br>
      </motion.div>
    );
  }
}

export default withCookies(SellerSignUp);
