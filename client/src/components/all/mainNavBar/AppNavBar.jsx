import React, { useState, useContext } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { ReactComponent as Shop } from "../../svgs/shop.svg";
import { ReactComponent as Home } from "../../svgs/house-door.svg";
import { ReactComponent as Box } from "../../svgs/box-seam.svg";
import { ReactComponent as Cart } from "../../svgs/cart3.svg";
import ProductContext from "./../../../contexts/productContext";

const AppNavBar = ({ user, clearState }) => {
  const ourContext = useContext(ProductContext);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const cartShow = ourContext.cart.length ? "turnRed" : "null";
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
          THIRFT'N'HUB
        </NavLink>
        {/* <motion.div
        className="display-4 lead jumbotxt"
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      > */}

        <NavItem className="center shoppingCart ml-2">
          <Link to="/showCart">
            <Cart />
            <sup className={cartShow}>{ourContext.cart.length}</sup>
          </Link>
        </NavItem>

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
            {user.status === "user" ? null : (
              <NavItem className="left">
                <NavLink to="/sellerSignIn" onClick={toggleNavbar}>
                  <Box className="mr-1" /> SELLER
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </motion.div>
  );
};

export default AppNavBar;
