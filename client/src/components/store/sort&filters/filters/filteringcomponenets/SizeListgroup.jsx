import React, { useState } from "react";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const SizeListGroup = ({ sizes, handleSizeFilter }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        style={{ backgroundColor: "white", color: "black" }}
        caret
      >
        SIZE
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Select Size</DropdownItem>
        <DropdownItem divider />
        {sizes.map(size => (
          <DropdownItem
            className="btn"
            onClick={() => {
              handleSizeFilter(size);
            }}
            key={size}
          >
            {size}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default SizeListGroup;

/* <div>
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
</div>; */
