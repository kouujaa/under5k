import React, { Component } from "react";
import axios from "axios";

import { Form, FormGroup, Label, Input, Button, CustomInput } from "reactstrap";

class UploadProductImage extends Component {
  state = {
    picInfo: "",
    selectedFile1: ""
    // selectedFile3: "",
    // selectedFile2: ""
  };

  fileSelectHandler1 = e => {
    this.setState({ selectedFile1: e.target.files[0] });
    console.log(this.state);
  };
  // fileSelectHandler2 = e => {
  //   this.setState({ selectedFile2: e.target.files[0] });
  //   console.log(this.state);
  // };

  // fileSelectHandler3 = e => {
  //   this.setState({ selectedFile3: e.target.files[0] });

  //   console.log(this.state);
  // };

  fileUploadHandler = async () => {
    const { picInfo, selectedFile1, selectedFile2, selectedFile3 } = this.state;

    try {
      //
      if (selectedFile !== "") {
        // Creating a FormData object
        let fileData = new FormData();
        // Setting the 'image' field and the selected file
        fileData.set(
          "image",
          selectedFile1,
          `${selectedFile1.lastModified}-${selectedFile1.name}`
        );

        const respon = await axios({
          method: "post",
          url: "api/images/upload",
          data: fileData,
          headers: { "Content-Type": "multipart/form-data" }
        });
        console.log(respon);
      }
    } catch (err) {
      setIsError(true);
    }
  };

  componentDidMount() {
    const picInfo = this.props;
    this.setState({ picInfo: picInfo });
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
