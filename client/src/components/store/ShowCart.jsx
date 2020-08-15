import React, { useContext } from "react";
import { Table } from "reactstrap";
import CartItem from "./CartItem";
import { Link, withRouter } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactComponent as Cart4 } from "../svgs/cart4.svg";
import ProductContext from "./../../contexts/productContext";

const ShowCart = props => {
  const ourContext = useContext(ProductContext);

  const displayall = () => {
    const { cart } = ourContext;
    if (cart.length === 0) return <h1>Cart Empty</h1>;
    const prod = cart.map(cartItem => (
      <CartItem
        key={cartItem.productID}
        item={cartItem}
        remove={ourContext.cartFunctions.removeFromCart}
        // inc={this.props.inc}
        // dec={this.props.dec}
      />
    ));
    return prod;
  };

  return (
    // <div>got here</div>
    <motion.div
      className="mb-5 cart pd1 container mt-5"
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <Table>
        <thead className="container mr-3">
          <tr>
            {/* <th>Qty</th> */}
            <th>Item Description</th>
            <th>(₦)Price</th>
            {/* <th>+</th>
              <th>-</th> */}
            <th>Out</th>
          </tr>
        </thead>
        <tbody>{displayall()}</tbody>
      </Table>
      {ourContext.cart.length > 0 ? (
        <motion.div
          initial={{ y: 3000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            to={{
              pathname: "/checkOut",
              search: "",
              hash: "",
              state: { cart: ourContext.cart }
            }}
          >
            <button className="btn btn-sm btn-success">
              Check Out <Cart4 className="ml-1" />
            </button>
          </Link>
        </motion.div>
      ) : null}
    </motion.div>
  );
};

export default withRouter(ShowCart);
