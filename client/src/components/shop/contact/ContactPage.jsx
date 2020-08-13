import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { motion } from "framer-motion";

class ContactPage extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  onChangeHandler = input => e => {
    const userInfo = { ...this.state };
    userInfo[e.target.name] = e.target.value;
    this.setState(userInfo);
  };

  onSubmitHandler = async e => {
    try {
      const { name, email, subject, message } = this.state;
      e.preventDefault();
      const resp = await axios.post("/api/feedback", {
        name,
        email,
        subject,
        message
      });

      if (resp.data === "success") {
        window.open("/home", "_self");
      } else {
        window.open("/contact", "_self");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <motion.section
        className="contact-page container mt-5 contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="contact-form">
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
                name="name"
                autoFocus
                required
                onChange={this.onChangeHandler("name")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Your Email</Label>
              <Input
                bsSize="lg"
                name="email"
                type="email"
                required
                onChange={this.onChangeHandler("email")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="subject">Subject</Label>
              <Input
                bsSize="lg"
                name="subject"
                required
                onChange={this.onChangeHandler("subject")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                name="message"
                id="responseMessaget"
                required
                onChange={this.onChangeHandler("message")}
              />
            </FormGroup>
            <Button className="mt-4">Send</Button>
          </Form>
        </div>

        <div className="themap mt-5">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31715.647688288926!2d3.5506763879067984!3d6.46377489375523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7442fc585df%3A0x642eaefe2c2c7ce2!2sAja%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2suk!4v1588787707050!5m2!1sen!2suk"
              width="300"
              height="300"
              frameborder="0"
              style={{ border: 0, width: "300px", height: "250px" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              title="map"
            ></iframe>
          </div>
          <div className="contact-text">
            <ul>
              <li>eden garden ajah, Lagos, Nigeria</li>
              <li>+2348059616031</li>
              <li>Thriftnhub@gmail.com</li>
            </ul>
          </div>
        </div>
      </motion.section>
    );
  }
}

export default ContactPage;
