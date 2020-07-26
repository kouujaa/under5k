import React from "react";
import { Carousel } from "react-responsive-carousel";

const SingleProductView = props => {
  console.log(props);
  const {
    productID,
    price,
    size,
    description,
    URI,
    seller
  } = props.location.state;
  return (
    <div className="mt-5 image ml-3 mb-5">
      <div>
        <Carousel
          className="singleCar"
          showStatus={false}
          infiniteLoop
          autoPlay
          showThumbs={false}
          showIndicators={false}
        >
          {URI.map(url => {
            return (
              <div key={url}>
                <img
                  className="singleCardImg"
                  src={url}
                  alt="product Image"
                ></img>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="mt-5">
        <p>description:{description}</p>
        <p>price: {price}</p>
        <p>size:{size}</p>
        <p>seller:{seller}</p>
        <p>product ID:{productID}</p>
      </div>
    </div>
  );
};

export default SingleProductView;
