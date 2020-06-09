import React, { Component } from "react";
import SizeListGroup from "../SizeListgroup";

class Filters extends Component {
  state = {
    sellers: ["omare", "shalom", "juliet"],
    sizes: ["XS", "S", "M", "L", "XL", "One Size", "All"]
  };

  render() {
    const { handleFilter, selectedSize } = this.props;
    return (
      <SizeListGroup
        handleFilter={handleFilter}
        sizes={this.state.sizes}
        selectedSize={selectedSize}
      />
    );
  }
}

export default Filters;
