import React, { Component } from "react";
import { Card, CardText } from "reactstrap";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import _ from "lodash";

class NewArrivals extends Component {
  // getproducts = () => {
  //   const products = _.slice(this.props.products, 0, 6);
  //   const ht = products.map(item => (
  //     <div key={item.productCode}>
  //       <CardText>{item.description.slice(0, 12) + "..."}</CardText>
  //       <Card>
  //         <img src={item.URI[0]} alt="cat"></img>
  //       </Card>
  //     </div>
  //   ));
  //   return ht;
  // };

  render() {
    const products = _.slice(this.props.products, 0, 6).reverse();

    return (
      <React.Fragment>
        <div className="mt-5 mb-5">
          <h4>New Arrivals</h4>
          <Carousel
            autoPlay={3500}
            animationSpeed={1000}
            infinite
            slidesPerScroll={1}
            slidesPerPage={4}
          >
            {products.map(item => (
              <img
                key={item.productCode}
                className="sec_img"
                src={item.URI[0]}
                alt="cat"
              ></img>
            ))}
          </Carousel>
        </div>
      </React.Fragment>
    );
  }
}

export default NewArrivals;
