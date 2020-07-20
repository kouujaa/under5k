import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import _ from "lodash";
import ProductContext from "./../../../contexts/productContext";

class TopSellers extends Component {
  static contextType = ProductContext;
  state = {
    topper: ["juliet", "omathrift", "shalom"]
  };
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
    const products = _.slice(this.context.products, 0, 6);

    return (
      <ProductContext.Consumer>
        {productContext => (
          <React.Fragment>
            <div className="mt-5 mb-5">
              <h4 style={{ color: "#ff006c" }}>Top Sellers</h4>
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

export default TopSellers;
