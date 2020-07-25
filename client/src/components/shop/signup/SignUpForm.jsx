import React, { Component } from "react";
import { Form, FormGroup, Label, Input, CustomInput, Button } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import GoogleSignIn from "./GoogleSignIn";
import { withCookies } from "react-cookie";

class SignUpForm extends Component {
  state = {
    data: {
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
    },
    errors: {}
  };

  schema = {
    userName: Joi.string()
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
      .label("State")
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
      } = this.state.data;

      var seeif = await axios.post("/api/customers/signUp", {
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

      const { cookies } = this.props;

      cookies.set("token", seeif.data, { path: "/" });
      window.location = "/";
    } catch (err) {
      if (err.response) {
        console.log(err.response.data.err);
        this.setState({ errors: err.response.data.err + "!!!. Try another" });
      }
      this.props.history.push({
        pathname: "/signUp",
        search: "",
        hash: "",
        state: { message: err.response.data.err + "!!!. Try another" }
      });
    }
  }

  onGoogleSign = async e => {
    try {
      await axios.get("/auth/google");

      // window.location = "/";
    } catch (err) {
      this.props.history.push({
        pathname: "/signIn",
        search: "",
        hash: "",
        state: { message: "invalid login credentials!" }
      });
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="signUp mt-3">
        <div className="container sigupform">
          <div className="container center">
            <GoogleSignIn />
          </div>

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
                onChange={this.onChangeHandler}
                name="userName"
                required
                onFocus
              />
              {errors["userName"] && (
                <div className="alert alert-danger">{errors["userName"]}</div>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="Password">Password</Label>
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
              <Label for="firstName">First Name</Label>
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
              <Label for="lastName">Last Name</Label>
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
              <Label for="address">Address</Label>
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
              <Label for="Email">Email</Label>
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
              <Label for="phoneNumberr">Phone Number</Label>
              <Input
                type="number"
                name="phoneNumber"
                id="phoneNumberr"
                required
                onChange={this.onChangeHandlerber}
              />
              {errors["phoneNumber"] && (
                <div className="alert alert-danger">
                  {errors["phoneNumber"]}
                </div>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="dob">Birthday</Label>
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
              <Label for="sexSelect">Gender</Label>
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
              {errors["gender"] && (
                <div className="alert alert-danger">{errors["gender"]}</div>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="StateSelect">State</Label>
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
              <Label for="exampleCheckbox">Switches</Label>
              <div>
                <CustomInput
                  type="switch"
                  id="notifications"
                  name="notifications"
                  label="Turn on noification"
                  required
                  onChange={this.onChangeHandlertions}
                />
                <CustomInput
                  type="switch"
                  id="exampleCustomSwitch2"
                  name="agreement"
                  required
                  label="agree to customer agreement"
                  onChange={this.onChangeHandlert}
                />
                <Link to="/userAgreement">user Agreement</Link>
              </div>
            </FormGroup>
            {this.props.location.state ? (
              <p className="text-danger">{this.props.location.state.message}</p>
            ) : null}
            {this.renderButton("SUBMIT")}
          </Form>
        </div>
        <span></span>
        <br></br>
      </div>
    );
  }
}
export default withCookies(SignUpForm);
