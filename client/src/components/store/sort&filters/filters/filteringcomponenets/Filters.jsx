import React, { Component } from "react";
import { Form, FormGroup, Button, CustomInput } from "reactstrap";
import axios from "axios";

class Filters extends Component {
  state = {
    sellers: [],
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
      size: "All",
      seller: "All"
    }
  };

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

  async componentDidMount() {
    const sellers = await axios.get("/api/seller/sellersList");

    this.setState({ sellers: sellers.data });
  }
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
                <option>{seller.shopName}</option>
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
