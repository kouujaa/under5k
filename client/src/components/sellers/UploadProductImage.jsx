import React, { Component } from "react";
import axios from "axios";
import firebase from "./../../firebase";
import jwtDecoder from "jwt-decode";

import { Form, FormGroup, Label, Button, CustomInput } from "reactstrap";

class UploadProductImage extends Component {
  state = {
    picInfo: "",
    picURL: [],
    selectedFile: [],
    msg: "",
    status: "",
    userInfo: ""
  };

  fileSelectHandler = async e => {
    const allFiles = [...this.state.selectedFile];

    allFiles.push(e.target.files);

    this.setState({ selectedFile: e.target.files });
  };
  doTheWork = async file => {
    try {
      let storageRef = firebase
        .storage()
        .ref(`images/${Date.now()}/${file.name}`);

      let uploadTask = storageRef.put(file);

      uploadTask.on(
        "state_changed",
        async snapshot => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          var msg = `Upload is ${progress}% done`;
          this.setState({ msg: msg });

          try {
            const durl = await storageRef.getDownloadURL();
            let tempURl = [...this.state.picURL];
            tempURl.push(durl);
            this.setState({ picURL: tempURl });
          } catch (err) {}
        },
        error => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;

            case "storage/canceled":
              // User canceled the upload
              break;
            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          this.setState({ status: 1 });
        }
      );
    } catch (err) {}
  };

  fileUploadHandler = async () => {
    for (var i = 0; i < this.state.selectedFile.length; i++) {
      this.doTheWork(this.state.selectedFile[i]);
    }
  };
  axioscall = async () => {
    try {
      await axios.post("/api/product/addProduct", {
        picInfo: this.props,
        picURL: this.state.picURL,
        userInfo: this.state.userInfo
      });
    } catch (err) {}
  };
  componentDidMount() {
    const { uploadinfo } = this.props;
    this.setState({ picInfo: uploadinfo });
    try {
      const jwt = localStorage.getItem("token");
      const userInfo = jwtDecoder(jwt);
      this.setState({ userInfo });
    } catch (error) {}
  }

  render() {
    const { msg, status } = this.state;

    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="uploadPic1">Select image a minimum of 3 images</Label>
            <CustomInput
              type="file"
              id="uploadPic1"
              name="uploadPic1"
              label="Select Image"
              onChange={this.fileSelectHandler}
              multiple
              required
            />

            <Button onClick={this.fileUploadHandler}>Upload Image</Button>

            {msg && <p className="mt-3">{msg}</p>}
            {status && (
              <div>
                <span className="success">upload complete</span>
                <Button className="btn-success" onClick={this.axioscall}>
                  Click To Continue
                </Button>
              </div>
            )}
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default UploadProductImage;
