import React from "react";
import { ReactComponent as Call } from "../../svgs/telephone-outbound.svg";
import { ReactComponent as Maps } from "../../svgs/map.svg";
import { ReactComponent as Mail } from "../../svgs/envelope-open.svg";
import { ReactComponent as MailB } from "../../svgs/mailbox.svg";
import { ReactComponent as Face } from "../../svgs/facebook.svg";
import { ReactComponent as Insta } from "../../svgs/instagram.svg";

import { NavLink } from "react-router-dom";

const Footer = props => {
  return (
    // <div className="bottom down mt-5">
    <div color="dark" expand="sm" style={{ height: "20em" }}>
      <div className="footerdiv mt-5">
        <div className="ml-3 mr-5 mt-2 ">
          <h6>FOLLOW US</h6>
          <div>
            <a
              style={{ color: "#ff006c" }}
              href="https://www.instagram.com/thriftnhub/"
            >
              <Insta height="1.8em" width="1.8em" />
            </a>
            <a
              className="ml-3"
              style={{ color: "#ff006c" }}
              href="https://web.facebook.com/thriftnhubpage"
            >
              <Face height="1.8em" width="1.8em" />
            </a>
          </div>
        </div>
        <div className="ml-3 mt-2">
          <h6 className="fw-title">About Us</h6>
        </div>
        <div className="ml-3 mr-5 mt-2 mb-3">
          <h6>CONTACT</h6>
          <h6>
            <MailB className="mr-1" />
            <NavLink style={{ color: "#ff006c" }} to="/contact" href="#navb">
              Send Direct Message
            </NavLink>
          </h6>
          <h6>
            <Mail /> <span>thriftnhub@gmail.com</span>
          </h6>

          <h6>
            <Call />
            <span> 08059616031</span>
          </h6>
          <h6>
            <Maps /> <span>eden garden ajah, Lagos, Nigeria</span>
          </h6>
        </div>
      </div>
      <p className="rights center mt-5" style={{ color: "black" }}>
        <span>&copy;&nbsp; </span>
        <span className="copyright-year"></span>
        <span>&nbsp;</span>
        <span>Thrift'N'hub</span>
        <span>.&nbsp;</span>
        <span>All Rights Reserved.</span>
        <span>&nbsp;</span>
        <NavLink to="/userAgreement" style={{ color: " #ff006c" }}>
          Privacy Policy
        </NavLink>
        . Design&nbsp;by&nbsp;
        <a href="mailto:kouujaa@gmail.com" style={{ color: " #ff006c" }}>
          Kouujaa
        </a>
      </p>
    </div>
    // </div>
  );
};

export default Footer;
