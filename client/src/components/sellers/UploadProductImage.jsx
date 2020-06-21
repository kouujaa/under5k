// import React, { Component } from "react";
// import axios from "axios";
// import firebase from "./../../firebase";

// import { Form, FormGroup, Label, Button, CustomInput } from "reactstrap";

// class UploadProductImage extends Component {
//   state = {
//     picInfo: "",
//     picURL: [],
//     selectedFile1: []
//     // selectedFile3: "",
//     // selectedFile2: ""
//   };

//   fileSelectHandler1 = e => {
//     const allFiles = [...this.state.selectedFile1];
//     allFiles.push(e.target.files);
//     this.setState({ selectedFile1: allFiles });
//   };

//   handleupl = async file => {
//     console.log("entering file handlerup");
//     console.log(file);

//     let storageRef = firebase
//       .storage()
//       .ref(`images/${Date.now()}/${file.name}`);
//     console.log("storageref created");
//     storageRef.put(file).on("state_changed", async () => {
//       console.log("onstatechanged entered");
//       try {
//         const durl = await storageRef.getDownloadURL();
//         return durl;
//       } catch (err) {
//         console.log("something went wrong");
//       }
//     });
//   };

//   fileUploadHandler = async e => {
//     console.log("entering file upload loop");
//     const file = this.state.selectedFile1;
//     console.log(file);
//     const durl = this.handleupl(file[0]);
//     let picURL = [...this.state.picURL];
//     picURL.push(durl);
//     this.setState({ picURL });
//     console.log(this.state.picURL);

//     // this.state.selectedFile1.forEach(file => {
//     //   console.log("entering file upload loop");
//     //   console.log(file);
//     //   const durl = this.handleupl(file);
//     //   let picURL = [...this.state.picURL];
//     //   picURL.push(durl);
//     //   this.setState({ picURL });
//     //   console.log(this.state.picURL);
//     // });

//     console.log("entering axios call");
//     console.log(this.state.picURL);
//     const answer = await axios.post("/api/product/addProduct", {
//       picInfo: this.state.picInfo,
//       picURL: this.state.picURL
//     });
//     console.log(answer);
//     // let bucketName = "images";

//     // let file = this.state.selectedFile1[0];
//     // let storageRef = firebase
//     //   .storage()
//     //   .ref(`${bucketName}/${Date.now()}/${file.name}`);

//     // let uploadTask = storageRef.put(file);

//     // uploadTask.on("state_changed", async () => {
//     //   try {
//     //     const durl = await storageRef.getDownloadURL();
//     //     let tempURl = [...this.state.picURL];
//     //     tempURl.push(durl);
//     //     this.setState({ picURL: tempURl });
//     //     console.log(this.state.picURL);
//     //   } catch (err) {
//     //     console.log("something went wrong");
//     //   }
//     // });

//     // let file = this.state.selectedFile1[i];
//     // let storageRef = firebase
//     //   .storage()
//     //   .ref(`${bucketName}/${Date.now()}/${file.name}`);

//     // let uploadTask = storageRef.put(file);

//     // uploadTask.on("state_changed", async () => {
//     //   try {
//     //     const durl = await storageRef.getDownloadURL();

//     //     this.setState({ picURL: durl });
//     //     console.log(this.state.picURL);
//     //   } catch (err) {}
//     // });
//     // if (this.state.picURL !== "") {

//     // }
//   };

//   componentDidMount() {
//     const { uploadinfo } = this.props;
//     this.setState({ picInfo: uploadinfo });
//   }

//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <Form>
//           <FormGroup>
//             <Label for="uploadPic1">Select image 1</Label>
//             <CustomInput
//               type="file"
//               id="uploadPic1"
//               name="uploadPic1"
//               label="Select Image"
//               onChange={this.fileSelectHandler1}
//               required
//             />
//             <Label for="uploadPic2">Select image 2</Label>
//             <CustomInput
//               type="file"
//               id="uploadPic2"
//               name="uploadPic2"
//               label="Select Image"
//               onChange={this.fileSelectHandler1}
//               required
//             />
//             <Label for="uploadPic3">Select image 3</Label>
//             <CustomInput
//               type="file"
//               id="uploadPic3"
//               name="uploadPic3"
//               label="Select Image"
//               onChange={this.fileSelectHandler1}
//               required
//             />
//             <Button onClick={this.fileUploadHandler}>Upload Image</Button>
//           </FormGroup>
//         </Form>
//       </div>
//     );
//   }
// }

// export default UploadProductImage;

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
    try {
      console.log(this.state);

      let bucketName = "images";

      let file = this.state.selectedFile1[0];
      let storageRef = firebase
        .storage()
        .ref(`${bucketName}/${Date.now()}/${file.name}`);

      let uploadTask = storageRef.put(this.state.selectedFile1[0]);

      uploadTask.on("state_changed", async () => {
        try {
          const durl = await storageRef.getDownloadURL();
          let tempURl = [...this.state.picURL];
          tempURl.push(durl);
          this.setState({ picURL: tempURl });
          console.log(this.state.picURL);
        } catch (err) {
          console.log(err);
          console.log("something went wrong");
        }
      });
    } catch (err) {
      console.log(err);
    }

    // try {
    //   const answer = await axios.post("/api/product/addProduct", {
    //     picInfo: this.state.picInfo,
    //     picURL: this.state.picURL
    //   });
    // } catch (err) {
    //   console.log(err);
    // }

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

            <Button onClick={this.fileUploadHandler}>Upload Image</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default UploadProductImage;
