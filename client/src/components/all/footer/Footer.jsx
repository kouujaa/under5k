import React from "react";
import { Navbar } from "reactstrap";

const Footer = props => {
  return (
    <div className="navb bottom down mt-5 " id="navb">
      <Navbar color="dark" dark expand="sm" style={{ height: "19em" }}>
        <div className="ml-3">
          <h5 className="fw-title">Address</h5>
          <ul>
            <li>eden garden ajah, Lagos, Nigeria</li>
          </ul>
        </div>
        <div className="ml-3 mr-5 ulinks">
          <h5>Contact</h5>
          <ul>
            <li>
              <a href="mailto:omare@gmail.com">Email Us</a>
            </li>
            <li>08023410662</li>
          </ul>
        </div>
        <div className="ml-3 mr-5 ulinks">
          <h5>Follow us</h5>
          <ul>
            <li>
              <a href="mailto:omare@gmail.com">instagram</a>
            </li>
            <li>facebook</li>
          </ul>
        </div>
      </Navbar>
    </div>
  );
};

export default Footer;
