import React, { Component } from "react";
import { Card, CardText } from "reactstrap";
import _ from "lodash";

class NewArrivals extends Component {
  getproducts = () => {
    const products = _.slice(this.props.products, 0, 6);
    const ht = products.map(item => (
      <div key={item.productCode}>
        <CardText>{item.description.slice(0, 12) + "..."}</CardText>
        <Card>
          <img src={item.url} alt="cat"></img>
        </Card>
      </div>
    ));
    return ht;
  };

  render() {
    return (
      <React.Fragment>
        <div className="mt-5 mb-5">
          <h4>New Arrivals</h4>
          <div className="sec1 m-1">{this.getproducts()}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewArrivals;
