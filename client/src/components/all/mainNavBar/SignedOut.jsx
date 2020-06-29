import React from "react";
import { NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Door } from "../../svgs/door-open.svg";
import { ReactComponent as Door2 } from "../../svgs/person-plus.svg";

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
          <Door className="mr-1" /> LOGIN
        </Link>
      </NavItem>
      <NavItem className="left">
        <Link
          to="/signUp"
          onClick={() => {
            props.toggle();
          }}
        >
          <Door2 className="mr-1" /> SIGNUP
        </Link>
      </NavItem>
    </React.Fragment>
  );
};

export default SignedOut;
