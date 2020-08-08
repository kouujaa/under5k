import React, { Component } from "react";
import { Button } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { ReactComponent as Bag } from "../svgs/bag-plus.svg";
import { Link } from "react-router-dom";
import { withCookies } from "react-cookie";
import jwtDecoder from "jwt-decode";

class Product extends Component {
  goToProduct() {
    console.log("show product");
    // this.props.history.push({
    //   pathname: "/product",
    //   search: "",
    //   hash: "",
    //   state: { data: "operation failed" }
    // });
  }

  render() {
    try {
      const { cookies } = this.props;
      var jwt = cookies.get("token");
      var user = jwtDecoder(jwt);
    } catch (err) {
      console.log("invalid token");
    }

    const {
      productID,
      price,
      size,
      description,
      URI,
      seller,
      color,
      category,
      material
    } = this.props.item;

    const { cartHandler } = this.props;

    return (
      <motion.div
        className="mb-2 prdiv"
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        {" "}
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
                <Link
                  to={{
                    pathname: "/productView",
                    state: {
                      productID,
                      price,
                      size,
                      description,
                      URI,
                      seller,
                      color,
                      category,
                      material
                    }
                  }}
                >
                  <div key={url} onClick={this.goToProduct}>
                    <img
                      className="prodCardImg"
                      src={url}
                      alt={productID}
                    ></img>
                  </div>{" "}
                </Link>
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
            <div className="right">
              <Button
                className="btn btn-danger btn-sm right"
                onClick={() => {
                  cartHandler(
                    productID,
                    description,
                    size,
                    price,
                    URI,
                    seller
                    // user.email
                  );
                }}
              >
                <Bag /> bag
              </Button>
            </div>
          </h6>
          <h6>Store: {seller}</h6>
        </div>
        {/* </Card> */}
      </motion.div>
    );
  }
}

export default withCookies(Product);
