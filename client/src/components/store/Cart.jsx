import React, { Component } from "react";
import { Table } from "reactstrap";
import CartItem from "./CartItem";
import { Link, withRouter } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactComponent as Cart4 } from "../svgs/cart4.svg";
class Cart extends Component {
  displayall = () => {
    const { cart } = this.props;

    const prod = cart.map(cartItem => (
      <CartItem
        key={cartItem.productID}
        item={cartItem}
        remove={this.props.rem}
        inc={this.props.inc}
        dec={this.props.dec}
      />
    ));
    return prod;
  };

  render() {
    return (
      <motion.div
        className="mb-5 cart"
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <Table>
          <thead className="container mr-3">
            <tr>
              {/* <th>Qty</th> */}
              <th>item</th>
              <th>Price</th>
              {/* <th>+</th>
              <th>-</th> */}
              <th>out</th>
            </tr>
          </thead>
          <tbody>{this.displayall()}</tbody>
        </Table>
        {this.props.cart.length > 0 ? (
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
                state: { cart: this.props.cart }
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
  }
}

export default withRouter(Cart);
