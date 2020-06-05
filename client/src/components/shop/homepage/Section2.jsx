import React, { Component } from "react";
import { Card, CardText } from "reactstrap";

class Section2 extends Component {
  state = {
    items: []
  };

  getitems = () => {
    const ht = this.state.items.map(item => (
      <div key={item.productCode}>
        <CardText>{item.description.slice(0, 12) + "..."}</CardText>
        <Card>
          <img src={item.url} alt="imagine"></img>
        </Card>
      </div>
    ));
    console.log(this.props);
    return ht;
  };
  // constructor() {
  //   super();
  //   console.log(" sec2 constructor called");
  //   console.log(this.props);
  // }
  // componentDidMount() {
  //   this.setState({ items: this.props.items });
  // }
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="mt-5 mb-5">
            <h4>Shop By category</h4>
            <div className="sec1 m-1">{this.getitems()}</div>
          </div>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default Section2;
