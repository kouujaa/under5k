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
  //   description,
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
      description,
      URI,
      seller
    } = this.props.item;
    console.log(this.props.item);
    const { cartHandler } = this.props;

    return (
      <div className="mb-2">
        <Card className="prodCard">
          <CardBody className="prodCardBody">
            <img className="prodCardImg" src={URI} alt={productID}></img>
          </CardBody>
          <CardFooter className="prodCardFooter">
            <h6>{description}</h6>
            <h6>₦{price}</h6>
            <h6>
              Size: {sizes}
              <Button
                className="btn btn-danger btn-sm right "
                onClick={() => {
                  cartHandler(productID, description, sizes, price, URI);
                }}
              >
                bag it
              </Button>
            </h6>
            <h6>Store: {seller}</h6>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Product;
