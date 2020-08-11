import React, { useState } from "react";

import {
  Form,
  FormGroup,
  CustomInput,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const handleAll = e => {
  e.preventDefault();
};

const SortListGroup = ({ handleSort }) => {
  const onChangeHandler = ({ currentTarget: input }) => {
    handleSort(input.value);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <React.Fragment>
      <Form
        inline
        style={{ zIndex: "1", backgroundColor: "rgba(154,205,50, 0.7)" }}
        onSubmit={handleAll}
        className="float-right"
      >
        <FormGroup>
          <CustomInput
            style={{
              width: "6em",
              padding: "3px",
              borderStyle: "none",
              backgroundColor: "rgba(154,205,50, 0.7)"
            }}
            type="select"
            id="sortSelect"
            name="sort"
            onChange={onChangeHandler}
          >
            <option value="">Sort By</option>

            <option
              value="priceLowToHigh"
              onChange={() => {
                handleSort("priceLowToHigh");
              }}
            >
              Price: low to high
            </option>

            <option
              value="priceHighToLow"
              onChange={() => {
                handleSort("priceHighToLow");
              }}
            >
              Price: high to low
            </option>

            <option
              value="NewArrivals"
              onChange={() => {
                handleSort("NewArrivals");
              }}
            >
              New arrivals
            </option>
          </CustomInput>
        </FormGroup>
      </Form>
    </React.Fragment>
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

{
  /* <Dropdown isOpen={dropdownOpen} toggle={toggle} className="float-right">
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
</Dropdown> */
}
