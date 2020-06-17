import React, { Component } from "react";
import axios from "axios";
import firebase from "./../../firebase";

import { Form, FormGroup, Label, Button, CustomInput } from "reactstrap";

class UploadProductImage extends Component {
  state = {
    picInfo: "",
    picURL: "",
    selectedFile1: ""
    // selectedFile3: "",
    // selectedFile2: ""
  };

  fileSelectHandler1 = e => {
    this.setState({ selectedFile1: e.target.files });
  };

  fileUploadHandler = async () => {
    // const { picInfo, selectedFile1, selectedFile2, selectedFile3 } = this.state;
    let bucketName = "images";
    let file = this.state.selectedFile1[0];
    let storageRef = firebase
      .storage()
      .ref(`${bucketName}/${Date.now()}/${file.name}`);

    let uploadTask = storageRef.put(file);

    uploadTask.on("state_changed", async () => {
      try {
        const durl = await storageRef.getDownloadURL();

        this.setState({ picURL: durl });
        console.log(this.state.picURL);
      } catch (err) {}
    });
    if (this.state.picURL !== "") {
      const answer = await axios.post("/api/product/addProduct", {
        picInfo: this.state.picInfo,
        picURL: this.state.picURL
      });
    }
  };

  componentDidMount() {
    const { uploadinfo } = this.props;
    this.setState({ picInfo: uploadinfo });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="uploadPic1">Select images</Label>
            <CustomInput
              type="file"
              id="uploadPic1"
              name="uploadPic1"
              label="Select Image"
              onChange={this.fileSelectHandler1}
            />
            {/* <Label for="uploadPic2">Select images</Label>
            <CustomInput
              type="file"
              id="uploadPic2"
              name="uploadPic2"
              label="Select Image"
              onChange={this.fileSelectHandler2}
            />
            <Label for="uploadPic3">Select images</Label>
            <CustomInput
              type="file"
              id="uploadPic3"
              name="uploadPic3"
              label="Select Image"
              onChange={this.fileSelectHandler3}
            /> */}
            <Button onClick={this.fileUploadHandler}>Upload Image</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default UploadProductImage;
