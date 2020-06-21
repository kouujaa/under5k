import React from "react";
import { Navbar } from "reactstrap";

const Footer = props => {
  return (
    // <div className="bottom down mt-5">
    <div color="dark" expand="sm" style={{ height: "20em" }}>
      <div className="footerdiv mt-5">
        <div className="ml-3 mr-5 mt-2 ">
          <h6>FOLLOW US</h6>
          <div>
            <a href="https://www.instagram.com/thriftnhub/">Instagram</a>
          </div>

          <div>
            <a href="https://web.facebook.com/thriftnhub">Facebook</a>
          </div>
        </div>
        <div className="ml-3 mt-2">
          <h6 className="fw-title">About Us</h6>
        </div>
        <div className="ml-3 mr-5 mt-2 mb-3">
          <h6>CONTACT</h6>

          <h6>
            Email: <span>triftnhub@gmail.com</span>
          </h6>

          <h6>
            Phone Number: <span>08023410662</span>
          </h6>
          <h6>
            Address: <span>eden garden ajah, Lagos, Nigeria</span>
          </h6>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Footer;
