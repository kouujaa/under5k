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
      <div className="filters ml-1 mr-1">
        <Form inline onSubmit={this.handleAll} className="trunc">
          <FormGroup inline>
            <CustomInput
              style={{ width: "6.4em", padding: "3px", borderStyle: "none" }}
              type="select"
              id="sellerSelect"
              name="seller"
              className="trunc"
              onChange={this.onChangeHandler}
            >
              <option selected>Shops</option>
              <option>All</option>
              {this.state.sellers.map(seller => (
                <option key={seller.shopName}>{seller.shopName}</option>
              ))}
            </CustomInput>
          </FormGroup>

          <FormGroup>
            <CustomInput
              style={{ width: "3.8em", padding: "3px", borderStyle: "none" }}
              type="select"
              id="sizeSelect"
              name="size"
              className="trunc"
              onChange={this.onChangeHandler}
            >
              <option value="">Size</option>
              {this.state.sizes.map(size => (
                <option key={size}>{size}</option>
              ))}
            </CustomInput>
          </FormGroup>

          <FormGroup>
            <CustomInput
              style={{ width: "4.3em", padding: "3px", borderStyle: "none" }}
              type="select"
              id="categorySelect"
              name="category"
              className="trunc"
              onChange={this.onChangeHandler}
            >
              <option value="">Type</option>
              {this.state.categories.map(category => (
                <option key={category}>{category}</option>
              ))}
            </CustomInput>
          </FormGroup>

          <Button className="applyButton">Apply</Button>
        </Form>
      </div>
    );
  }
}

export default Filters;
