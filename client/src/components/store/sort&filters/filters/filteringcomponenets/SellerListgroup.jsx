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
      <DropdownToggle caret>SHOP</DropdownToggle>
      <DropdownMenu>
        <DropdownItem divider />
        <DropdownItem header>Select Shop</DropdownItem>
        {sellers.map(seller => (
          <DropdownItem
            className="btn"
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

/* <div>
<h1>Sellers</h1>
<ListGroup>
  {sellers.map(seller => (
    <DropdownItem
      className="btn"
      onClick={() => {
        handleSellerFilter(seller);
      }}
      key={seller}
    >
      {seller}
    </DropdownItem>
  ))}
</ListGroup>
</div> */
