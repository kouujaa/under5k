import React, { Component } from "react";
import { ReactComponent as Trash } from "../svgs/trash.svg";
import { ReactComponent as CartP } from "../svgs/plus.svg";
import { ReactComponent as CartD } from "../svgs/dash.svg";

class CartItem extends Component {
  state = {};

  render() {
    let { quantity, productID, description, size, price } = this.props.item;
    price = price * quantity;
    return (
      <tr>
        <th scope="row">{quantity}</th>
        <td>{description}</td>
        <td>{size}</td>
        <td>{price}</td>
        <td>
          <span
            onClick={() => {
              this.props.inc(productID, price);
            }}
            className="btn btn-sm btn-primary"
          >
            <CartP />
          </span>
        </td>
        <td>
          <span
            onClick={() => {
              this.props.dec(productID);
            }}
            className="btn btn-sm btn-primary"
          >
            <CartD />
          </span>
        </td>
        <td>
          <span
            onClick={() => {
              this.props.remove(productID);
            }}
            className="btn btn-sm btn-primary"
          >
            <Trash />
          </span>
        </td>
      </tr>
    );
  }
}

export default CartItem;
