import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  CustomInput
} from "reactstrap";

const CategoryListGroup = ({ categories, handleCategoryFilter }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown
      style={{ backgroundColor: "white" }}
      isOpen={dropdownOpen}
      toggle={toggle}
    >
      <DropdownToggle
        style={{ backgroundColor: "white", color: "black" }}
        caret
      >
        Category
      </DropdownToggle>
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

// import React, { useState } from "react";
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button,
//   CustomInput
// } from "reactstrap";

// const CategoryListGroup = ({ categories, selectedCategory }) => {
//   return (
//     <Form>
//       <FormGroup>
//         <Label for="StateSelect">Bank</Label>
//         <Input
//           type="select"
//           name="bank"
//           id="bankSelect"
//           required
//           onChange={selectedCategory("bank")}
//         >
//           {categories.map(category => (
//             <option key={category}>{category}</option>
//           ))}
//         </Input>
//       </FormGroup>
//     </Form>
//   );
// };

// export default CategoryListGroup;
