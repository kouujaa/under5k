import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const SizeListGroup = ({ sizes, handleSizeFilter }) => {
  return (
    <div>
      <h1>Size</h1>
      <ListGroup>
        {sizes.map(size => (
          <ListGroupItem
            className="btn"
            onClick={() => {
              handleSizeFilter(size);
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
