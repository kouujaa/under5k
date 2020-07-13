import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import _ from "lodash";
import ProductContext from "./../../../contexts/productContext";

class NewArrivals extends Component {
  static contextType = ProductContext;
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
    var sorted = _.orderBy(this.context.products, ["dateAdded"], ["asc"]);
    const products = _.slice(sorted, 0, 12).reverse();
    return (
      <ProductContext.Consumer>
        {productContext => (
          <React.Fragment>
            <div className="mt-5 mb-5">
              <h4 style={{ color: "#ff006c" }}>New Arrivals</h4>
              <Carousel
                autoPlay={3500}
                animationSpeed={1000}
                infinite
                slidesPerScroll={1}
                slidesPerPage={5}
                offset={9}
              >
                {products.map(item => (
                  <img
                    key={item.productCode}
                    className="sec_img"
                    src={item.URI[0]}
                    alt="cat"
                  />
                ))}
              </Carousel>
            </div>
          </React.Fragment>
        )}
      </ProductContext.Consumer>
    );
  }
}

export default NewArrivals;
