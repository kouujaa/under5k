import React, { Component } from "react";
import axios from "axios";
import firebase from "./../../firebase";

import { Form, FormGroup, Label, Button, CustomInput } from "reactstrap";

class UploadProductImage extends Component {
  state = {
    picInfo: "",
    picURL: [],
    selectedFile1: []
    // selectedFile3: "",
    // selectedFile2: ""
  };

  fileSelectHandler1 = e => {
    const allFiles = [...this.state.selectedFile1];
    allFiles.push(e.target.files);
    this.setState({ selectedFile1: allFiles });
  };

  fileUploadHandler = async () => {
    console.log(this.state);

    let bucketName = "images";

    let file = this.state.selectedFile1[0];
    let storageRef = firebase
      .storage()
      .ref(`${bucketName}/${Date.now()}/${file.name}`);

    let uploadTask = storageRef.put(file);

    uploadTask.on("state_changed", async () => {
      try {
        const durl = await storageRef.getDownloadURL();
        let tempURl = [...this.state.picURL];
        tempURl.push(durl);
        this.setState({ picURL: tempURl });
        console.log(this.state.picURL);
      } catch (err) {
        console.log("something went wrong");
      }
    });

    let file1 = this.state.selectedFile1[1];
    let storageRef1 = firebase
      .storage()
      .ref(`${bucketName}/${Date.now()}/${file1.name}`);

    let uploadTask1 = storageRef1.put(file1);

    uploadTask1.on("state_changed", async () => {
      try {
        const durl1 = await storageRef1.getDownloadURL();
        let tempURl1 = [...this.state.picURL];
        tempURl1.push(durl1);
        this.setState({ picURL: tempURl1 });
        console.log(this.state.picURL);
      } catch (err) {
        console.log("something went wrong");
      }
    });

    let file2 = this.state.selectedFile1[2];
    let storageRef2 = firebase
      .storage()
      .ref(`${bucketName}/${Date.now()}/${file2.name}`);

    let uploadTask2 = storageRef2.put(file2);

    uploadTask2.on("state_changed", async () => {
      try {
        const durl2 = await storageRef2.getDownloadURL();
        let tempURl2 = [...this.state.picURL];
        tempURl2.push(durl2);
        this.setState({ picURL: tempURl2 });
        console.log(this.state.picURL);
      } catch (err) {
        console.log("something went wrong");
      }
    });

    // let file = this.state.selectedFile1[i];
    // let storageRef = firebase
    //   .storage()
    //   .ref(`${bucketName}/${Date.now()}/${file.name}`);

    // let uploadTask = storageRef.put(file);

    // uploadTask.on("state_changed", async () => {
    //   try {
    //     const durl = await storageRef.getDownloadURL();

    //     this.setState({ picURL: durl });
    //     console.log(this.state.picURL);
    //   } catch (err) {}
    // });
    // if (this.state.picURL !== "") {
    const answer = await axios.post("/api/product/addProduct", {
      picInfo: this.state.picInfo,
      picURL: this.state.picURL
    });
    // }
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
            <Label for="uploadPic1">Select image 1</Label>
            <CustomInput
              type="file"
              id="uploadPic1"
              name="uploadPic1"
              label="Select Image"
              onChange={this.fileSelectHandler1}
              required
            />
            <Label for="uploadPic2">Select image 2</Label>
            <CustomInput
              type="file"
              id="uploadPic2"
              name="uploadPic2"
              label="Select Image"
              onChange={this.fileSelectHandler1}
              required
            />
            <Label for="uploadPic3">Select image 3</Label>
            <CustomInput
              type="file"
              id="uploadPic3"
              name="uploadPic3"
              label="Select Image"
              onChange={this.fileSelectHandler1}
              required
            />
            <Button onClick={this.fileUploadHandler}>Upload Image</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default UploadProductImage;
