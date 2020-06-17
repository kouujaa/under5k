import React, { Component } from "react";
import { Card, CardBody, CardFooter, Button } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

class Product extends Component {
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
      <motion.div
        className="mb-2"
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Card className="prodCard">
          <CardBody className="prodCardBody">
            <motion.div
              className="display-4 lead jumbotxt"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <Carousel
                showStatus={false}
                infiniteLoop
                autoPlay
                showThumbs={false}
              >
                <div>
                  <img className="prodCardImg" src={URI} alt={productID}></img>{" "}
                </div>
                <div>
                  <img className="prodCardImg" src={URI} alt={productID}></img>
                </div>
              </Carousel>
            </motion.div>
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
      </motion.div>
    );
  }
}

export default Product;

{
  /* <React.Fragment>
  <motion.div
    className="display-4 lead jumbotxt"
    initial={{ x: 300 }}
    animate={{ x: 0 }}
    transition={{ duration: 1 }}
  >
    <Carousel showStatus={false} infiniteLoop autoPlay showThumbs={false}>
      <div>
      <img className="prodCardImg" src={URI} alt={productID}></img> </div>
      <div>
      <img className="prodCardImg" src={URI} alt={productID}></img></div>
    </Carousel>
  </motion.div>
</React.Fragment>; */
}
