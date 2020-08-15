import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const SellerListGroup = ({ handleSellerFilter, sellers }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        style={{ backgroundColor: "white", color: "black" }}
        caret
      >
        SHOP
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem divider />
        <DropdownItem header>Select Shop</DropdownItem>
        {sellers.map(seller => (
          <DropdownItem
            className="btn trunc"
            onClick={() => {
              handleSellerFilter(seller);
            }}
            key={seller}
          >
            {seller}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default SellerListGroup;
