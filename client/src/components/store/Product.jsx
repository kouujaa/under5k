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
        <img src="https://firebasestorage.googleapis.com/v0/b/thriftgallery-ab5c9.appspot.com/o/images%2Ffirstpic.jpg?alt=media&token=09314e43-62c7-4395-a1ce-85d784d19211" />
        <Link to="/shop" className="legend">
          TOP SELLER!!!
        </Link>
      </div>
      <div>
        <img src="https://firebasestorage.googleapis.com/v0/b/thriftgallery-ab5c9.appspot.com/o/images%2F2.jpg?alt=media&token=75fb0c37-f9aa-4ac4-89cc-9f1a852836d0" />
        <p className="legend">Dame of the week</p>
      </div>
    </Carousel>
  </motion.div>
</React.Fragment>; */
}
