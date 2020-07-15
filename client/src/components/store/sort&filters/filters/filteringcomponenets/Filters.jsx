import React, { Component } from "react";
import { Form, FormGroup, Button, CustomInput } from "reactstrap";

class Filters extends Component {
  state = {
    sellers: ["All", "omathrift", "shalom", "juliet"],
    sizes: ["All", "XS", "S", "M", "L", "XL", "One Size"],
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
      size: "All",
      seller: "All"
    }
  };

  //   onChangeHandler = e => {
  //     const filters = { ...this.state.filters };
  //     filters[e.target.name] = e.target.value;
  //     this.setState(filters);
  //     console.log(this.state);
  //   };

  onChangeHandler = ({ currentTarget: input }) => {
    const filters = { ...this.state.filters };
    filters[input.name] = input.value;
    this.setState({ filters });
  };

  handleAll = e => {
    e.preventDefault();
    const { category, size, seller } = this.state.filters;
    this.props.handleUpSubmit(seller, category, size);
  };

  render() {
    return (
      <div
        className="sandf mr-3 mb-2"
        style={{ backgroundColor: "white", border: "dotted", padding: "3px" }}
      >
        <Form inline onSubmit={this.handleAll}>
          <FormGroup>
            <CustomInput
              type="select"
              id="sellerSelect"
              name="seller"
              onChange={this.onChangeHandler}
            >
              <option value="">Shops</option>
              {this.state.sellers.map(seller => (
                <option>{seller}</option>
              ))}
            </CustomInput>
          </FormGroup>

          <FormGroup>
            <CustomInput
              type="select"
              id="sizeSelect"
              name="size"
              onChange={this.onChangeHandler}
            >
              <option value="">Size</option>
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
              <option value="">Categories</option>
              {this.state.categories.map(category => (
                <option>{category}</option>
              ))}
            </CustomInput>
          </FormGroup>

          <Button>Show filter</Button>
        </Form>
      </div>
    );
  }
}

export default Filters;
