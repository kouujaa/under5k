import React, { Component } from "react";
import { Card, CardText } from "reactstrap";

class Section1 extends Component {
  state = {
    items: []
  };

  getitems = () => {
    const ht = this.state.items.map(item => (
      <div key={item.productCode}>
        <CardText>{item.description.slice(0, 12) + "..."}</CardText>
        <Card>
          <img src={item.url} alt="cat"></img>
        </Card>
      </div>
    ));
    return ht;
  };

  componentDidMount() {
    this.setState({ items: this.props.items });
  }
  render() {
    return (
      <React.Fragment>
        <div className="mt-5 mb-5">
          <h4>Trending Items</h4>
          <div className="sec1 m-1">{this.getitems()}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Section1;
