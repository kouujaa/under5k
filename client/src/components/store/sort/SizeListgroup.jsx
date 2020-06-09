import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const SizeListGroup = ({ sizes, handleFilter }) => {
  return (
    <div>
      <h1>Filter</h1>
      <ListGroup>
        {sizes.map(size => (
          <ListGroupItem
            className="btn"
            onClick={() => {
              handleFilter(size);
            }}
            key={size}
          >
            {size}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default SizeListGroup;
