import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { ReactComponent as Shop } from "../../svgs/shop.svg";
import { ReactComponent as Home } from "../../svgs/house-door.svg";
import { ReactComponent as Box } from "../../svgs/box-seam.svg";

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
      <Navbar color="dark" dark expand="md" className="navbrands">
        <NavLink className="navbrands" id="top" to="/">
          THIRFTNHUB
        </NavLink>
        {/* <motion.div
        className="display-4 lead jumbotxt"
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      > */}
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar className="collapse">
          <Nav className="ml-auto" navbar>
            <NavItem className="left">
              <NavLink to="/home" onClick={toggleNavbar}>
                <Home className="mr-1" /> HOME
              </NavLink>
            </NavItem>
            <NavItem className="left">
              <NavLink to="/shop" onClick={toggleNavbar}>
                <Shop className="mr-1" /> SHOP
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
              <NavLink to="/sellerDashBoard" onClick={toggleNavbar}>
                <Box className="mr-1" /> SELLER
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </motion.div>
  );
};

export default AppNavBar;
