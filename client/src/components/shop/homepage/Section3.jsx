import React, { Component } from "react";
import { Card, CardText } from "reactstrap";
import _ from "lodash";

class TopSellers extends Component {
  getproducts = () => {
    const products = _.slice(this.props.products, 0, 6);
    const ht = products.map(product => (
      <div key={product.productCode}>
        <CardText>{product.seller}</CardText>
        <Card>
          <img src={product.url} alt="imagine"></img>
        </Card>
      </div>
    ));

    return ht;
  };

  componentDidMount() {
    this.setState({ products: this.props.products });
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="mt-5 mb-5">
            <h4>Top Sellers</h4>
            <div className="sec1 m-1">{this.getproducts()}</div>
          </div>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}
export default TopSellers;
