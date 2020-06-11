import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const CategoryListGroup = ({ categories, handleCategoryFilter }) => {
  return (
    <div>
      <h1>Category</h1>
      <ListGroup>
        {categories.map(category => (
          <ListGroupItem
            className="btn"
            onClick={() => {
              handleCategoryFilter(category);
            }}
            key={category}
          >
            {category}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default CategoryListGroup;
