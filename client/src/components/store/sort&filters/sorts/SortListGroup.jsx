import React, { useState } from "react";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const SortListGroup = ({ handleSort }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        style={{ backgroundColor: "white", color: "black" }}
        caret
      >
        Sort By
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem
          className="btn"
          onClick={() => {
            handleSort("priceLowToHigh");
          }}
          key={"priceLowToHigh"}
        >
          Price: low to high
        </DropdownItem>
        <DropdownItem
          className="btn"
          onClick={() => {
            handleSort("priceHighToLow");
          }}
          key={"priceHighToLow"}
        >
          Price: high to low
        </DropdownItem>
        <DropdownItem
          className="btn"
          onClick={() => {
            handleSort("NewArrivals");
          }}
          key={"NewArrivals"}
        >
          New arrivals
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default SortListGroup;

//  <div>
//     <h1>Sort</h1>
//     <ListGroup>
//       <DropdownItem
//         className="btn"
//         onClick={() => {
//           handleSort("priceLowToHigh");
//         }}
//         key={"priceLowToHigh"}
//       >
//         Price: low to high
//       </DropdownItem>
//       <DropdownItem
//         className="btn"
//         onClick={() => {
//           handleSort("priceHighToLow");
//         }}
//         key={"priceHighToLow"}
//       >
//         Price: high to low
//       </DropdownItem>
//       <DropdownItem
//         className="btn"
//         onClick={() => {
//           handleSort("NewArrivals");
//         }}
//         key={"NewArrivals"}
//       >
//         New arrivals
//       </DropdownItem>
//     </ListGroup>
//   </div>
