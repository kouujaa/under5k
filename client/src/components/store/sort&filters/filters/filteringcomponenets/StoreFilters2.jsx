import React, { Component } from "react";
import { Form, FormGroup, Button, CustomInput } from "reactstrap";

class Filters2 extends Component {
  state = {
    sizes: [
      "All",
      "6",
      "8",
      "10",
      "12",
      "14",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "One Size"
    ],
    categories: [
      "All",
      "Blouses",
      "Bodysuits",
      "Bottoms",
      "Capris",
      "Coats",
      "Dresses",
      "Hoodies",
      "Jackets",
      "Jeans",
      "Jeggings",
      "Jumpsuits",
      "Lingerie",
      "Pants",
      "Playsuits",
      "Sets",
      "Shirts",
      "Skirts",
      "Suits",
      "Sweaters",
      "SweatShirts",
      "Swimsuit",
      "Tees",
      "Tops"
    ],
    filters: {
      category: "All",
      size: "All"
    }
  };

  onChangeHandler = ({ currentTarget: input }) => {
    const filters = { ...this.state.filters };
    filters[input.name] = input.value;
    this.setState({ filters });
  };

  handleAll = e => {
    e.preventDefault();
    const { category, size } = this.state.filters;
    this.props.handleUpSubmit(category, size);
  };

  render() {
    return (
      <div className="sandf mr-2" style={{ backgroundColor: "white" }}>
        <Form inline onSubmit={this.handleAll}>
          <FormGroup>
            <CustomInput
              type="select"
              id="sizeSelect"
              name="size"
              onChange={this.onChangeHandler}
            >
              <option value="">By size</option>
              {this.state.sizes.map(size => (
                <option>{size}</option>
              ))}
            </CustomInput>
          </FormGroup>

          <FormGroup>
            <CustomInput
              type="select"
              id="categorySelect"
              name="category"
              onChange={this.onChangeHandler}
            >
              <option value="">By category</option>
              {this.state.categories.map(category => (
                <option>{category}</option>
              ))}
            </CustomInput>
          </FormGroup>
          <Button className="ml-1">Filter</Button>
        </Form>
      </div>
    );
  }
}

export default Filters2;
