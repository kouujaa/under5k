import React from "react";
import { NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const SignedOut = props => {
  return (
    <React.Fragment>
      <NavItem className="left">
        <Link
          to="/signIn"
          onClick={() => {
            props.toggle();
          }}
        >
          SIGN IN
        </Link>
      </NavItem>
      <NavItem className="left">
        <Link
          to="/signUp"
          onClick={() => {
            props.toggle();
          }}
        >
          LOGIN
        </Link>
      </NavItem>
    </React.Fragment>
  );
};

export default SignedOut;
