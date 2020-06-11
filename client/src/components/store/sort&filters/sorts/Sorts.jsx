import React, { Component } from "react";
import SortListGroup from "./SortListGroup";

class Sorts extends Component {
  state = {
    date: [],
    price: []
  };

  render() {
    const { handleSort } = this.props;
    return (
      <SortListGroup
        handleSort={handleSort}
        // selectedSort={selectedSort}
      />
    );
  }
}

export default Sorts;
