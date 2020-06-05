import React, { Component } from "react";
import { Table } from "reactstrap";
import CartItem from "./CartItem";
import { Link, withRouter } from "react-router-dom";

class Cart extends Component {
  // showCArt=()=>{
  //    const { cart } = this.props;

  // }

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

  // handleCheckout = () => {
  //   const { cart } = this.props;
  //   this.props.history.push({
  //     pathname: "/checkOut",
  //     appState: { detail: cart }
  //   });
  // };
  // { quantity: 1, productID }
  // componentDidUpdate() {}

  render() {
    // console.log(this.props.cart);
    return (
      <div>
        <Table>
          <thead className="container mr-3">
            <tr>
              <th>Qty</th>
              <th>item</th>
              <th>Size</th>
              <th>Price</th>
              <th>+</th>
              <th>-</th>
              <th>out</th>
            </tr>
          </thead>
          <tbody>{this.displayall()}</tbody>
        </Table>
        <Link
          to={{
            pathname: "/checkOut",
            search: "",
            hash: "",
            state: { cart: this.props.cart }
          }}
        >
          <button>Check Out</button>
        </Link>
      </div>
    );
  }
}

export default withRouter(Cart);
