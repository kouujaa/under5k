import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const CategoryListGroup = ({ categories, handleCategoryFilter }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Category</DropdownToggle>
      <DropdownMenu>
        <DropdownItem divider />
        <DropdownItem header>Select Category</DropdownItem>
        {categories.map(category => (
          <DropdownItem
            className="btn"
            onClick={() => {
              handleCategoryFilter(category);
            }}
            key={category}
          >
            {category}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CategoryListGroup;
