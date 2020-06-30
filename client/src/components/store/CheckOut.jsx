import React, { Component } from "react";
import { Button, Table } from "reactstrap";
import jwtDecoder from "jwt-decode";
import { ReactComponent as Card } from "./../svgs/credit-card.svg";

// import * as _ from "lodash";

class CheckOut extends Component {
  state = {
    user: {},
    config: {}
  };

  checkout = () => {
    try {
      this.props.history.push({
        pathname: "/payStackRDR",
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
      const jwt = localStorage.getItem("token");
      const user = jwtDecoder(jwt);

      this.setState({ user });
      this.setState({
        config: {
          reference: new Date().getTime(),
          email: user.email,
          amount: this.getTotal() * 100,
          publicKey: "pk_test_f3deda0f23ed680ded6e89fe2a51740a7e23979e"
        }
      });
    } catch (err) {}
  }
  getTotal = () => {
    let sum = 0;
    const cart = this.props.location.state.cart;
    cart.map(cartItem => (sum = cartItem.price * cartItem.quantity + sum));
    return sum + 1000;
  };

  showItems = () => {
    const cart = this.props.location.state.cart;

    return cart.map(cartItem => (
      <tr>
        <td>{cartItem.quantity}</td>
        <td>
          <img
            className="mr-3"
            src={cartItem.URI}
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
      <div className="checkOut-page m-5 container">
        <div className="mb-5">
          <div className="m-4">
            <h5>
              Name: {lastName} {firstName}
            </h5>
          </div>
          <div className="m-4">
            <h5>Phone Number: 0{phoneNumber}</h5>
          </div>
          <div className="m-4">
            <h5>Address: {address}</h5>
          </div>
          <div className="m-4">
            <h5>Total + ₦1000 delivery fee: ₦{this.getTotal()}</h5>
          </div>
          <Button
            className="btn btn-sm btn-success container"
            onClick={this.checkout}
          >
            Proceed to payment
            <Card className="ml-2" />
          </Button>
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
                <th>₦ {this.getTotal() - 1000}</th>
              </tr>
            </tfoot>
          </Table>
        </div>
      </div>
    );
  }
}

export default CheckOut;
