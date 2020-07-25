import React from "react";
import { Form } from "reactstrap";
import axios from "axios";
import { motion } from "framer-motion";
// import { awaitExpression } from "@babel/types";
import Joi from "joi-browser";
import UseForm from "./../common/UseForm";
import { withCookies } from "react-cookie";
import { NavLink } from "react-router-dom";

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
      const { cookies } = this.props;
      cookies.set("token", token.data, { path: "/" });

      // localStorage.setItem("token", token.data);
      window.location = "/";
    } catch (err) {
      this.props.history.push({
        pathname: "/sellerSignIn",
        search: "",
        hash: "",
        state: { message: "invalid login dataentials!" }
      });
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <motion.div
          className="signIn"
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Form
            className="container mt-5 siginform"
            onSubmit={this.onSubmitHandler}
          >
            <h3>Sign In Your Shop</h3>
            <br></br>
            {this.renderInput("shopName", "Shop Name", "text")}
            {this.renderInput("password", "Password", "password")}
            {this.props.location.state ? (
              <p className="text-danger">{this.props.location.state.message}</p>
            ) : null}
            {this.renderButton("SIGN IN")}
            <div className="mt-2">
              or
              <NavLink to="/sellerSignUp"> SignUp</NavLink>
            </div>
          </Form>

          <br></br>
        </motion.div>
      </div>
    );
  }
}

export default withCookies(SellerSignInPage);
