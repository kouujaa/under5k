import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, CustomInput } from "reactstrap";
import { Link, Route } from "react-router-dom";
import UploadProductImage from "./UploadProductImage";

class UploadProduct extends Component {
  state = {
    itemDescription: "",
    sizes: "",
    colors: [],
    numberInStock: 1,
    price: 0,
    material: "",
    category: ""
  };

  onChangeHandler = input => e => {
    const userInfo = { ...this.state };
    userInfo[e.target.name] = e.target.value;
    this.setState(userInfo);
  };

  // onColorChangeHandler = input => e => {
  //   if (e.target.checked === true) {
  //     const colors = [...this.state.colors];
  //     console.log(e.target.id);
  //     colors.push(e.target.id);
  //     this.setState(colors);
  //   }
  //   if (e.target.checked === false) {
  //     var colors = [...this.state.colors];
  //     colors = colors.filter(v => v !== e.target.id);
  //     this.setState(colors);
  //   }
  //   console.log(this.state.colors);
  //   // userInfo[e.target.name] = e.target.value;
  //   // this.setState(userInfo);
  // };

  onArrayChangeHandler = e => {
    // const userInfo = { ...this.state };
    const selectedFile1 = e.target.files[0];
    // // userInfo[e.target.name].push(e.target.value);
    this.setState({ selectedFile1 });
    console.log(e.target.files[0]);
    console.log(this.state.selectedFile1);
  };

  onSubmitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    // const { fullName, email, subject, message } = this.state;
    // //send message and clear screen
  };

  render() {
    return (
      <div className="container">
        <h1>Upload Product</h1>
        <hr />
        <div className="container">
          <Form onSubmit={this.onSubmitHandler}>
            <FormGroup>
              <Label for="itemDescription">Item Description</Label>
              <Input
                name="itemDescription"
                bsSize="lg"
                required
                onChange={this.onChangeHandler("itemDescription")}
              ></Input>
            </FormGroup>

            <FormGroup>
              <Label for="sizes">size</Label>
              <Input
                type="select"
                name="sizes"
                id="sizes"
                required
                onChange={this.onChangeHandler("sizes")}
              >
                <option>Select size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="colors">`Select Main Color</Label>
              <Input
                type="select"
                name="colors"
                id="colors"
                required
                onChange={this.onChangeHandler("colors")}
              >
                <option>Select Color</option>
                <option>White</option>
                <option>Black</option>
                <option>Blue</option>
                <option>Red</option>
                <option>Green</option>
                <option>Brown</option>
                <option>Purple</option>
                <option>Pink</option>
                <option>Grey</option>
                <option>Beige</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="numberInStock">Number Of Item In stock</Label>
              <Input
                type="number"
                name="numberInStock"
                bsSize="lg"
                required
                onChange={this.onChangeHandler("numberInStock")}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                type="number"
                name="price"
                bsSize="lg"
                required
                onChange={this.onChangeHandler("price")}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="material">Material</Label>
              <Input
                type="select"
                name="material"
                id="material"
                required
                onChange={this.onChangeHandler("material")}
              >
                <option>Select Material</option>
                <option>Cotton"</option>
                <option>FauxFur</option>
                <option>Fur</option>
                <option>Leather</option>
                <option>Linen</option>
                <option>NYLON</option>
                <option>Polyester</option>
                <option>Rayon</option>
                <option>Silk</option>
                <option>Spandex</option>
                <option>SyntheticLeather</option>
                <option>Wool</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <Input
                type="select"
                name="category"
                id="category"
                required
                onChange={this.onChangeHandler("category")}
              >
                <option>Select Category</option>
                <option>Blouses</option>
                <option>Bodysuits</option>
                <option>Bottoms</option>
                <option>Capris</option>
                <option>Coats</option>
                <option>Dresses</option>
                <option>Hoodies</option>
                <option>Jackets</option>
                <option>Jeans</option>
                <option>Jumpsuits</option>
                <option>Lingerie</option>
                <option>Pants</option>
                <option>Rompers</option>
                <option>Sets</option>
                <option>Shirts</option>
                <option>Skirt</option>
                <option>Suits</option>
                <option>Sweaters</option>
                <option>SweatShirts</option>
                <option>Swimsuit</option>
                <option>Tees</option>
                <option>Tops</option>
              </Input>
            </FormGroup>
            <Button className="mt-4" type="submit">
              Proceed to image upload
            </Button>
          </Form>

          <Link to="/sellerDashBoard/uploadProduct/uploadProductImage">
            proceed to image upload
          </Link>

          <Route path="/sellerDashBoard/uploadProduct/uploadProductImage">
            <UploadProductImage uploadinfo={this.state} />
          </Route>
        </div>
      </div>
    );
  }
}

export default UploadProduct;

{
  /* <FormGroup>
        <Label for="colors">Select Colors</Label>
        <div>
          <CustomInput type="checkbox" id="Checkbox" label="" />
          <CustomInput type="checkbox" id="Checkbox2" label="" />
          <CustomInput type="checkbox" id="Checkbox3" label=""  />
          <CustomInput type="checkbox" id="Checkbox4" label=""  />
          <CustomInput type="checkbox" id="Checkbox" label="" />
          <CustomInput type="checkbox" id="Checkbox2" label="" />
          <CustomInput type="checkbox" id="Checkbox3" label=""  />
          <CustomInput type="checkbox" id="Checkbox4" label=""  />
          <CustomInput type="checkbox" id="Checkbox" label="" />
          <CustomInput type="checkbox" id="Checkbox2" label="" />
          <CustomInput type="checkbox" id="Checkbox3" label=""  />
          <CustomInput type="checkbox" id="Checkbox4" label=""  />
        </div>
      </FormGroup> */
}
