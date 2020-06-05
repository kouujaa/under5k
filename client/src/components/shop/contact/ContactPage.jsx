import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class ContactPage extends Component {
  state = {
    fullName: "",
    email: "",
    subject: "",
    message: ""
  };
  onChangeHandler = input => e => {
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
      <section className="contact-page container m-5 contact">
        <div>
          <div>
            <h2>Get in touch</h2>
          </div>
          <Form
            className="container mt-5 contactform"
            onSubmit={this.onSubmitHandler}
          >
            <FormGroup>
              <Label for="name"> Your Name</Label>
              <Input
                bsSize="lg"
                name="fullName"
                onChange={this.onChangeHandler("fullName")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Your Email</Label>
              <Input
                bsSize="lg"
                name="email"
                onChange={this.onChangeHandler("email")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="subject">Subject</Label>
              <Input
                bsSize="lg"
                name="subject"
                onChange={this.onChangeHandler("subject")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                name="message"
                id="responseMessaget"
                onChange={this.onChangeHandler("message")}
              />
            </FormGroup>
            <Button className="mt-4">Send</Button>
          </Form>
        </div>

        <div className="themap">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31715.647688288926!2d3.5506763879067984!3d6.46377489375523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7442fc585df%3A0x642eaefe2c2c7ce2!2sAja%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2suk!4v1588787707050!5m2!1sen!2suk"
              width="600"
              height="450"
              frameborder="0"
              style={{ border: 0, width: "400px", height: "250px" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              title="map"
            ></iframe>
          </div>
          <div className="contact-text">
            <ul>
              <li>Main Str, no 23, New York</li>
              <li>+546 990221 123</li>
              <li>fashion@contact.com</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactPage;
