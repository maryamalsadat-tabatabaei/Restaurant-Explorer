import React, { Component } from "react";
import { Button, FormGroup, Label, Input, FormText } from "reactstrap";
import { Control, Form, Errors, actions } from "react-redux-form";
import LocationMap from "./LocationComponent";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: "",
      touched: {
        password: false,
        email: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    this.props.resetFeedbackForm();
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate(password, email) {
    const errors = {
      password: "",
      email: "",
    };

    if (this.state.touched.password && password.length < 3)
      errors.password = "Password should be >= 3 characters";

    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === "@").length !== 1
    )
      errors.email = "Email should contain a @";

    return errors;
  }

  render() {
    const errors = this.validate(this.state.password, this.state.email);

    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12 mb-5">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-md-4">
            <h5>Our Address</h5>
            <address className="mb-5">
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              Canada
              <br />
              <i className="fa fa-phone mt-4"></i>: +1 888 888 8888
              <br />
              <i className="fa fa-fax"></i>: +1 888 888 8888
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:maryam@food.com">maryam@food.com</a>
            </address>
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:maryam@food.com"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 ">
            <h5>Map of our Location</h5>
            <div style={{ width: "50vw", height: "50vh" }}>
              <LocationMap
                isMarkerShown={true}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA6MTc0mU9LUy_IlBCcc0j7sGiDcnY9WCs"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h2>Leave us a Message</h2>

            <p>
              Aenean massa diam, viverra vitae luctus sed, gravida eget est.
              Etiam nec ipsum porttitor,
              <br /> consequat libero eu, dignissim eros. Nulla auctor lacinia
              enim id mollis.
            </p>
          </div>
          <div className="col-12 col-md-6 offset-md-3">
            <Form
              model="feedback"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <div className="form-group">
                <Label htmlFor="email">Email</Label>
                <Control.text
                  model=".email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  validators={{
                    required,
                    validEmail,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required: "Required",
                    validEmail: "Invalid Email Address",
                  }}
                />
              </div>
              <div className="form-group">
                <Label htmlFor="password">Password</Label>
                <Control.text
                  model=".password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                    isNumber,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".password"
                  show="touched"
                  messages={{
                    required: " Required",
                    minLength: " Must be greater than 2 numbers",
                    maxLength: " Must be 15 numbers or less",
                    isNumber: " Must be a number",
                  }}
                />
              </div>
              <div className="form-group">
                <Label htmlFor="select">Select</Label>
                <Control.select
                  model=".select"
                  name="select"
                  className="form-control"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Control.select>
              </div>
              <div className="form-group">
                <Label htmlFor="message">Your Feedback</Label>
                <Control.textarea
                  model=".message"
                  id="message"
                  name="message"
                  rows="12"
                  className="form-control"
                />
              </div>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Option one
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Option two
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Control.checkbox
                    model=".checkbox"
                    name="checkbox"
                    className="form-check-input"
                  />{" "}
                  Check me out
                </Label>
              </FormGroup>
              <div className="form-group">
                <Button type="submit" className=" btn btn-danger btn-lg mt-4">
                  Send Feedback
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
