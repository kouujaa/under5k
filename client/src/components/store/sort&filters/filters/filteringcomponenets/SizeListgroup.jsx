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
