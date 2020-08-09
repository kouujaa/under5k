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

const onChangeHandler = ({ currentTarget: input }) => {
  // const filters = { ...this.state.filters };
  // filters[input.name] = input.value;
  // this.setState({ filters });
};
const handleAll = e => {
  e.preventDefault();
};

const SortListGroup = ({ handleSort }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <React.Fragment>
      <Form inline style={{zIndex:"1"}} onSubmit={handleAll} className="float-right">
        <FormGroup>
          <CustomInput
            style={{ width: "6em", padding: "3px", borderStyle: "none" }}
            type="select"
            id="sortSelect"
            name="sort"
            onChange={onChangeHandler}
          >
            <option value="">Sort By</option>

            <option
              key={"priceLowToHigh"}
              onClick={() => {
                handleSort("priceLowToHigh");
              }}
            >
              Price: low to high
            </option>

            <option
              key={"priceHighToLow"}
              onClick={() => {
                handleSort("priceHighToLow");
              }}
            >
              Price: high to low
            </option>

            <option
              key={"NewArrivals"}
              onClick={() => {
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
