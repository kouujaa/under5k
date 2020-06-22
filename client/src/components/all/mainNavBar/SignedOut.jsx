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
          LOGIN
        </Link>
      </NavItem>
      <NavItem className="left">
        <Link
          to="/signUp"
          onClick={() => {
            props.toggle();
          }}
        >
          SIGNIN
        </Link>
      </NavItem>
    </React.Fragment>
  );
};

export default SignedOut;
