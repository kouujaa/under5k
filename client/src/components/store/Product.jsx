import React, { Component } from "react";
import { Card, CardBody, CardFooter, Button } from "reactstrap";
class Product extends Component {
  // const {
  //   productID,
  //   instock,
  //   rating,
  //   price,
  //   colors,
  //   size,
  //   productTitle,
  //   materials,
  //   category,
  //   seller,
  //   URI
  // } = this.props.item;
  render() {
    const {
      productID,
      price,
      sizes,
      productTitle,
      URI,
      seller
    } = this.props.item;
    console.log(this.props.item);
    const { cartHandler } = this.props;

    return (
      <div>
        <Card style={{ width: "21em", height: "23em" }}>
          <CardBody style={{ width: "18em", height: "19em" }}>
            <img
              src={URI}
              alt={productID}
              style={{ width: "18.5em", height: "11.5em" }}
            ></img>
          </CardBody>
          <CardFooter>
            <h6>{productTitle}</h6>
            <h6>₦{price}</h6>
            <h6>Size: {sizes}</h6>
            <h6>Store: {seller}</h6>
            {/* <h5>Rating: {rating}</h5> */}
            <Button
              className="btn btn-danger btn-sm"
              onClick={() => {
                cartHandler(productID, productTitle, sizes, price, URI);
              }}
            >
              add to cart
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Product;
