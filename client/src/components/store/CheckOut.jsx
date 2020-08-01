import React, { Component } from "react";
import { Button, Table } from "reactstrap";
import jwtDecoder from "jwt-decode";
import { ReactComponent as Card } from "./../svgs/credit-card.svg";
import { motion } from "framer-motion";
import axios from "axios";

class CheckOut extends Component {
  state = {
    user: {},
    config: {}
  };

  checkout = async () => {
    try {
      const load = await axios.get("/api/llaves/ppstackLlaves");
      this.props.history.push({
        pathname: "/payStackRDR",
        search: "",
        hash: "",
        state: {
          details: this.state.user,
          email: this.state.user.email,
          charge: this.getTotal() * 100,
          config: this.state.config,
          cart: this.props.location.state.cart,
          llaves: load.data.uno
        }
      });
    } catch (err) {}
  };
  stockpile = () => {
    try {
      this.props.history.push({
        pathname: "/stockpileStackRDR",
        search: "",
        hash: "",
        state: {
          details: this.state.user,
          email: this.state.user.email,
          charge: this.getTotal() * 100,
          config: this.state.config,
          cart: this.props.location.state.cart
        }
      });
    } catch (err) {}
  };

  componentDidMount() {
    try {
      const { cookies } = this.props;
      const jwt = cookies.get("token");
      const user = jwtDecoder(jwt);

      this.setState({ user });
      this.setState({
        config: {
          reference: new Date().getTime(),
          email: user.email,
          amount: this.getTotal() * 100,
          publicKey: ""
        }
      });
    } catch (err) {
      console.log("from CheckOu comp", err.message);
    }
  }
  getTotal = () => {
    let sum = 0;
    const cart = this.props.location.state.cart;
    cart.map(cartItem => (sum = cartItem.price * cartItem.quantity + sum));
    return sum + 1500;
  };

  showItems = () => {
    const cart = this.props.location.state.cart;

    return cart.map(cartItem => (
      <tr>
        <td>{cartItem.quantity}</td>
        <td>
          <img
            className="mr-3"
            src={cartItem.URI[0]}
            alt={cartItem.productID}
            style={{ width: "40px", height: "40px" }}
          ></img>
          {cartItem.description}
        </td>
        <td>{cartItem.size}</td>
        <td>₦ {cartItem.price * cartItem.quantity}</td>
      </tr>
    ));
  };

  render() {
    const { phoneNumber, address, firstName, lastName } = this.state.user;
    return (
      <motion.div
        className="checkOut-page m-1 mt-5 container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-5">
          <div className="mt-3">
            <h5>
              Name: {lastName} {firstName}
            </h5>
          </div>
          <div className="mt-3">
            <h5>Phone Number: 0{phoneNumber}</h5>
          </div>
          <div className="mt-3">
            <h5>Address: {address}</h5>
          </div>
          <div className="mt-3">
            <h5>Total + ₦1500 delivery fee: ₦{this.getTotal()}</h5>
          </div>
          <div>
            <Button
              className="btn btn-sm btn-success container"
              onClick={this.checkout}
            >
              Payment for Delivery
              <Card className="ml-2" />
            </Button>
            {/* <Button
              className="btn btn-sm btn-success container"
              onClick={this.stockpile}
            >
              Payment for stockpile
              <Card className="ml-2" />
            </Button> */}
          </div>
        </div>
        <div>
          ORDER SUMMARY
          <Table>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Description</th>
                <th>Size</th>
                <th>total Price</th>
              </tr>
            </thead>
            <tbody>{this.showItems()}</tbody>
            <tfoot>
              <tr>
                <th>TOTAL PRICE</th>
                <th></th>
                <th></th>
                <th>₦ {this.getTotal() - 1500}</th>
              </tr>
            </tfoot>
          </Table>
        </div>
      </motion.div>
    );
  }
}

export default CheckOut;
