import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import _ from "lodash";

class TopSellers extends Component {
  // getproducts = () => {
  //   const products = _.slice(this.props.products, 0, 6);
  //   const ht = products.map(product => (
  //     <div key={product.productCode}>
  //       <CardText>{product.seller}</CardText>
  //       <Card>
  //         <img src={product.URI[0]} alt="imagine"></img>
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
          <h4 style={{ color: "#ff006c" }}>Shop By Category</h4>
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
                src={item.URI[0]}
                className="sec_img"
                alt="cat"
              />
            ))}
          </Carousel>
        </div>
      </React.Fragment>
    );
  }
}
export default TopSellers;
