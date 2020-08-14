import React from "react";

import { Form, FormGroup, CustomInput } from "reactstrap";

const handleAll = e => {
  e.preventDefault();
};

const SortListGroup = ({ handleSort }) => {
  const onChangeHandler = ({ currentTarget: input }) => {
    handleSort(input.value);
  };

  return (
    <React.Fragment>
      <Form
        inline
        style={{ zIndex: "1" }}
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
