import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const SellerListGroup = ({ handleSellerFilter, sellers }) => {
  return (
    <div>
      <h1>Sellers</h1>
      <ListGroup>
        {sellers.map(seller => (
          <ListGroupItem
            className="btn"
            onClick={() => {
              handleSellerFilter(seller);
            }}
            key={seller}
          >
            {seller}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default SellerListGroup;
