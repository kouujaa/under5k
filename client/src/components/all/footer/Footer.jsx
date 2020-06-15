import React from "react";
import { Navbar } from "reactstrap";

const Footer = props => {
  return (
    <div className="bottom down mt-5">
      <Navbar color="dark" dark expand="sm" style={{ height: "30em" }}>
        <div className="ml-3">
          <h6 className="fw-title">
            Address: <span>eden garden ajah, Lagos, Nigeria</span>
          </h6>
        </div>
        <div className="ml-3 mr-5 ulinks">
          <h6>Contact</h6>

          <a href="mailto:omare@gmail.com">Email Us</a>

          <p>08023410662</p>
        </div>
        <div className="ml-3 mr-5 ulinks">
          <h6>Follow us</h6>
          {/* <ul>
            <li>
              <a href="mailto:omare@gmail.com">instagram</a>
            </li>
            <li>facebook</li>
          </ul> */}
          <ul>
            <li>
              <a href="https://www.instagram.com/thriftnhub/">Instagram</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://web.facebook.com/thriftnhub">Facebook</a>
            </li>
          </ul>
        </div>
      </Navbar>
    </div>
  );
};

export default Footer;
