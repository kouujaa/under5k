import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const SortListGroup = ({ handleSort }) => {
  return (
    <div>
      <h1>Sort</h1>
      <ListGroup>
        <ListGroupItem
          className="btn"
          onClick={() => {
            handleSort("priceLowToHigh");
          }}
          key={"priceLowToHigh"}
        >
          Price: low to high
        </ListGroupItem>
        <ListGroupItem
          className="btn"
          onClick={() => {
            handleSort("priceHighToLow");
          }}
          key={"priceHighToLow"}
        >
          Price: high to low
        </ListGroupItem>
        <ListGroupItem
          className="btn"
          onClick={() => {
            handleSort("NewArrivals");
          }}
          key={"NewArrivals"}
        >
          New arrivals
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default SortListGroup;
