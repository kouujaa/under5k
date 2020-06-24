import React, { Component } from "react";
import { Card, CardText } from "reactstrap";
import _ from "lodash";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

class TopCategories extends Component {
  // getproducts = () => {
  //   const products = _.slice(this.props.products, 0, 6);
  //   const ht = products.map(product => (
  //     <div key={product.productCode}>
  //       <CardText>{product.category}</CardText>
  //       <Card>
  //         <img src={product.URI[0]} alt="imagine"></img>
  //       </Card>
  //     </div>
  //   ));

  //   return ht;
  // };

  render() {
    const products = _.slice(this.props.products, 0, 6);

    return (
      <React.Fragment>
        <div className="mt-5 mb-5">
          <h4>Top Sellers</h4>
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

export default TopCategories;
