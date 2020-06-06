import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, CustomInput } from "reactstrap";

class UploadProduct extends Component {
  class = {
    PictureBuffer: [],
    itemDescription: "",
    sizes: [],
    colors: [],
    numberInStock: 1,
    price: 0,
    Marerial: "",
    Category: ""
  };

  onChangeHandler = input => e => {
    const userInfo = { ...this.state };
    userInfo[e.target.name] = e.target.value;
    this.setState(userInfo);
  };

  onArrayChangeHandler = input => e => {
    const userInfo = { ...this.state };
    userInfo[e.target.name] = e.target.value;
    this.setState(userInfo);
  };

  onSubmitHandler = e => {
    e.preventDefault();
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
              <Label for="exampleCustomFileBrowser">Select images</Label>
              <CustomInput
                type="file"
                id="image"
                name="image"
                label="Select"
                onChange={this.onArrayChangeHandler("numberInStock")}
              />
              <CustomInput
                type="file"
                id="image"
                name="image"
                label="Select"
                onChange={this.onArrayChangeHandler("numberInStock")}
              />
              <CustomInput
                type="file"
                id="image"
                name="image"
                label="Select"
                onChange={this.onArrayChangeHandler("numberInStock")}
              />
              <CustomInput
                type="file"
                id="image"
                name="image"
                label="Select"
                onChange={this.onArrayChangeHandler("numberInStock")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="imageupload">Upload Picture</Label>
              <Input type="textarea" name="imageupload" id="imageupload" />
            </FormGroup>
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
              <Label for="">Sizes</Label>
              <Input name="" bsSize="lg" required></Input>
            </FormGroup>
            <FormGroup>
              <Label for="">Colors</Label>
              <Input name="" bsSize="lg" required></Input>
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
              <Input type="select" name="category" id="category" required>
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
          </Form>
        </div>
      </div>
    );
  }
}

export default UploadProduct;
