import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, CustomInput } from "reactstrap";

class UploadProduct extends Component {
  class = {
    pictureBuffer: ["hey"],
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

    // userInfo[e.target.name].push(e.target.value);
    this.setState(userInfo);
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
              <Label for="pictureBuffer">Select images</Label>
              <CustomInput
                type="file"
                id="pictureBuffer"
                name="pictureBuffer"
                label="Select"
                onChange={this.onArrayChangeHandler("pictureBuffer")}
              />
              {/* <CustomInput
                type="file"
                id="image"
                name="image"
                label="Select"
                onChange={this.onArrayChangeHandler("numberInStock")}
              /> */}
              {/* <CustomInput
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
              /> */}
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

            <FormGroup check>
              <Label for="sizes">Sizes</Label>
              <div>
                <CustomInput type="checkbox" id="S" label="S" inline />
                <CustomInput type="checkbox" id="XS" label="XS" inline />
                <CustomInput type="checkbox" id="M" label="M" inline />
                <CustomInput type="checkbox" id="L" label="L" inline />
                <CustomInput type="checkbox" id="XL" label="XL" inline />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="colors">Colors</Label>
              <FormGroup check>
                <div>
                  <CustomInput
                    type="checkbox"
                    id="Black"
                    label="Black"
                    inline
                  />
                  <CustomInput
                    type="checkbox"
                    id="White"
                    label="White"
                    inline
                  />
                  <CustomInput type="checkbox" id="Blue" label="Blue" inline />
                  <CustomInput type="checkbox" id="Red" label="Red" inline />
                  <CustomInput
                    type="checkbox"
                    id="Green"
                    label="Green"
                    inline
                  />
                  <CustomInput
                    type="checkbox"
                    id="Brown"
                    label="Brown"
                    inline
                  />
                  <CustomInput
                    type="checkbox"
                    id="Purple"
                    label="Purple"
                    inline
                  />
                  <CustomInput type="checkbox" id="Pink" label="Pink" inline />
                  <CustomInput type="checkbox" id="Grey" label="Grey" inline />
                  <CustomInput
                    type="checkbox"
                    id="Beige"
                    label="Beige"
                    inline
                  />
                </div>
              </FormGroup>
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
            <Button className="mt-4" type="submit">
              Upload pic
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default UploadProduct;
