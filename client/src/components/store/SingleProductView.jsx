import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { ReactComponent as Bag } from "../svgs/bag-plus.svg";
import ProductContext from "./../../contexts/productContext";
import { Button } from "reactstrap";

class SingleProductView extends Component {
  static contextType = ProductContext;

  render() {
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
      // cartHandler
    } = this.props.location.state;
    return (
      <ProductContext.Consumer>
        {productContext => (
          <div className="mt-5 image ml-2 mb-5">
            <div className="container">
              <Carousel
                className="singleCar"
                showStatus={false}
                showArrows={true}
                showThumbs={true}
                showIndicators={false}
              >
                {URI.map(url => {
                  return (
                    <div key={url}>
                      <img
                        className="singleCardImg"
                        src={url}
                        alt="product"
                      ></img>
                    </div>
                  );
                })}
              </Carousel>
            </div>
            <div className="mt-5 prodDetails container">
              <h2>
                {description} - {color.toLowerCase()}
              </h2>

              <h5>
                <Link style={{ color: "#ff006c" }} to={"/store/" + seller}>
                  {seller} store
                </Link>
              </h5>

              <h3>
                <b>₦{price}</b>
              </h3>
              <h5>Size: {size}</h5>
              <h6>Material: {material}</h6>
              <h6>Category: {category}</h6>
              <h6>Product ID:{productID}</h6>
              <Button
                className="singleB btn btn-danger btn-sm left"
                onClick={() => {
                  productContext.cartFunctions.addToCart(
                    productID,
                    description,
                    size,
                    price,
                    URI,
                    seller
                  );
                }}
              >
                <Bag /> bag
              </Button>
            </div>
          </div>
        )}
      </ProductContext.Consumer>
    );
  }
}

export default SingleProductView;
