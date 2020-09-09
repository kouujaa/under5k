import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link, Route } from "react-router-dom";
import UploadProductImage from "./UploadProductImage";
import { motion } from "framer-motion";
class UploadProduct extends Component {
  state = {
    itemDescription: "",
    sizes: "",
    colors: [],
    price: 0,
    material: "",
    category: ""
  };

  onChangeHandler = input => e => {
    const userInfo = { ...this.state };
    userInfo[input] = e.target.value;
    this.setState(userInfo);
  };

  render() {
    return (
      <motion.div
        className="container"
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
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
                <option>Select Size</option>
                <option>6</option>
                <option>6-8</option>
                <option>8</option>
                <option>8-10</option>
                <option>10</option>
                <option>10-12</option>
                <option>12</option>
                <option>12-14</option>
                <option>14</option>
                <option>14-16</option>
                <option>16</option>
                <option>16-18</option>
                <option>18</option>
                <option>18-20</option>
                <option>20</option>
                <option>20-22</option>
                <option>22</option>
                <option>22-24</option>
                <option>24</option>
                <option>24-26</option>
                <option>26</option>
                <option>One Size</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="colors">Select Main Color</Label>
              <Input
                type="select"
                name="colors"
                id="colors"
                required
                onChange={this.onChangeHandler("colors")}
              >
                <option>Select Color</option>
                <option>Beige</option>
                <option>Black</option>
                <option>Blue</option>
                <option>Brown</option>
                <option>Green</option>
                <option>Grey</option>
                <option>Indigo</option>
                <option>Orange</option>
                <option>Pink</option>
                <option>Purple</option>
                <option>Red</option>
                <option>Violet</option>
                <option>White</option>
                <option>Yellow</option>
                <option>Multi-Color</option>
                <option>Others</option>
              </Input>
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
                <option>Chiffon</option>
                <option>Chinos</option>
                <option>Cotton</option>
                <option>Denim</option>
                <option>Faux Fur</option>
                <option>Fur</option>
                <option>Khaki</option>
                <option>Lace</option>
                <option>Latex</option>
                <option>Leather</option>
                <option>Linen</option>
                <option>Lycra</option>
                <option>Mesh</option>
                <option>Nylon</option>
                <option>Polyester</option>
                <option>Rayon</option>
                <option>Satin</option>
                <option>Silk</option>
                <option>Spandex</option>
                <option>Synthetic Leather</option>
                <option>Velvet</option>
                <option>Wool</option>
                <option>Others</option>
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
                <option>Bodycon</option>
                <option>Bodysuits</option>
                <option>Capris</option>
                <option>Coats</option>
                <option>Dresses</option>
                <option>Hoodies</option>
                <option>Jackets</option>
                <option>Jeans</option>
                <option>Jeggings</option>
                <option>Joggers</option>
                <option>Jumpsuits</option>
                <option>Lingerie</option>
                <option>Pants</option>
                <option>Playsuits</option>
                <option>Rompers</option>
                <option>Sets</option>
                <option>Shirts</option>
                <option>Shorts</option>
                <option>Skirts</option>
                <option>Suits</option>
                <option>Sweaters</option>
                <option>SweatShirts</option>
                <option>Swimsuit</option>
                <option>Tees</option>
                <option>Tops</option>
                <option>Trousers</option>
                <option>Others</option>
              </Input>
            </FormGroup>
            <span className="btn mt-4 mb-4">
              <Link to="/sellerDashBoard/uploadProduct/uploadProductImage">
                Proceed to image upload
              </Link>
            </span>

            <Route path="/sellerDashBoard/uploadProduct/uploadProductImage">
              <UploadProductImage uploadinfo={this.state} />
            </Route>
          </Form>
        </div>
      </motion.div>
    );
  }
}

export default UploadProduct;
