import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
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
      <Navbar color="dark" dark expand="sm" className="navbrands">
        <NavbarBrand className="navbrands" href="/">
          THIRFTNHUB
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar className="collapse">
          <Nav className="ml-auto" navbar>
            <NavItem className="left">
              <NavLink to="/home" onClick={toggleNavbar}>
                HOME
              </NavLink>
            </NavItem>
            <NavItem className="left">
              <NavLink to="/shop" onClick={toggleNavbar}>
                SHOP
              </NavLink>
            </NavItem>
            {!user && <SignedOut toggle={toggleNavbar} />}
            {user && (
              <SignedIn
                user={user}
                toggle={toggleNavbar}
                signOut={clearState}
              />
            )}

            <NavItem className="left">
              <NavLink to="/contact" onClick={toggleNavbar}>
                CONTACT
              </NavLink>
            </NavItem>
            <NavItem className="left">
              <NavLink to="/sellerHomePage" onClick={toggleNavbar}>
                SELLER
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </motion.div>
  );
};

export default AppNavBar;
