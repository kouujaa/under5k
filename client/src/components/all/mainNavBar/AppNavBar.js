import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const AppNavBar = ({ user, clearState }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <motion.div
      className="navb"
      id="navb"
      initial={{ y: -500 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 500 }}
    >
      <Navbar color="dark" dark expand="sm" className="">
        <NavbarBrand
          href="/"
          style={{
            color: "grey",
            fontFamily:
              "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif"
          }}
        >
          {/* <img
                className="mlogo mr-2"
                alt="shopimg"
                src="https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/89968990_957204811341726_4384545590646669312_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_ohc=_yDoTJAiMLcAX_3Pkfy&oh=dbc6832c838585e55d115f270ba2218e&oe=5ED7C28A"
              /> */}
          LEANOR COUTURE
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar className="collapse">
          <Nav className="ml-auto" navbar>
            <NavItem className="left">
              <Link to="/home" onClick={toggleNavbar}>
                HOME
              </Link>
            </NavItem>
            <NavItem className="left">
              <Link to="/shop" onClick={toggleNavbar}>
                SHOP
              </Link>
            </NavItem>
            {!user && <SignedOut toggle={toggleNavbar} />}
            {user && <SignedIn toggle={toggleNavbar} signOut={clearState} />}

            <NavItem className="left">
              <Link to="/contact" onClick={toggleNavbar}>
                CONTACT
              </Link>
            </NavItem>
            <NavItem className="left">
              <Link to="/sellerHomePage" onClick={toggleNavbar}>
                SELLER PORTAL
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </motion.div>
  );
};

export default AppNavBar;
