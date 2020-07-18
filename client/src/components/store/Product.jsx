import React, { Component } from "react";
import { Button } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { ReactComponent as Bag } from "../svgs/bag-plus.svg";

class Product extends Component {
  render() {
    const {
      productID,
      price,
      size,
      description,
      URI,
      seller
    } = this.props.item;

    const { cartHandler } = this.props;

    return (
      <motion.div
        className="mb-2 prdiv"
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="display-4 lead productcar"
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Carousel
            className="productcar"
            showStatus={false}
            infiniteLoop
            autoPlay
            showThumbs={false}
            showIndicators={false}
          >
            {URI.map(url => {
              return (
                <div>
                  <img
                    className="prodCardImg"
                    key={url}
                    src={url}
                    alt={productID}
                  ></img>
                </div>
              );
            })}
          </Carousel>
        </motion.div>
        {/* </CardBody> */}
        <div className="prodCardFooter mt-3">
          <h6>{description}</h6>
          <h6>₦{price}</h6>
          <h6>
            Size: {size}
            <Button
              className="btn btn-danger btn-sm right "
              onClick={() => {
                cartHandler(productID, description, size, price, URI, seller);
              }}
            >
              <Bag /> bag
            </Button>
          </h6>
          <h6>Store: {seller}</h6>
        </div>
        {/* </Card> */}
      </motion.div>
    );
  }
}

export default Product;
