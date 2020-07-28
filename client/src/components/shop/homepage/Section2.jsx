import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import _ from "lodash";
// import Carousel from "@brainhubeu/react-carousel";
// import "@brainhubeu/react-carousel/lib/style.css";
import ProductContext from "./../../../contexts/productContext";

class NewArrivals extends Component {
  static contextType = ProductContext;

  render() {
    var sorted = _.orderBy(this.context.products, ["dateAdded"], ["asc"]);
    const products = _.slice(sorted, 0, 8).reverse();

    return (
      <ProductContext.Consumer>
        {productContext => (
          <React.Fragment>
            <div className="mt-5 mb-5 center">
              <h4 style={{ color: "#ff006c" }}>New Arrivals</h4>

              {products.map(item => (
                <React.Fragment>
                  <NavLink
                    to={{
                      pathname: "/productView",
                      state: {
                        productID: item.productID,
                        price: item.price,
                        size: item.size,
                        description: item.description,
                        URI: item.URI,
                        seller: item.seller,
                        color: item.color,
                        category: item.category,
                        material: item.material
                      }
                    }}
                  >
                    <img
                      key={item.productID}
                      className="sec1Img sec_img mb-2"
                      src={item.URI[0]}
                      alt="cat"
                    />
                  </NavLink>
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
        )}
      </ProductContext.Consumer>
    );
  }
}

export default NewArrivals;
