import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Form,
  Table,
  CustomInput,
} from "reactstrap";
import { Link } from "react-router-dom";

function Order2() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row ">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Order</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>

      <h3 className=" section-title">Order</h3>
      <hr />

      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <ul class="stepper-wrapper">
              <li class="stepper-item completed">
                <span class="step-counter">1</span>
                <span class="step-name">Shopping Cart</span>
              </li>
              <li class="stepper-item active">
                <span class="step-counter">2</span>
                <span class="step-name">Checkout</span>
              </li>
              <li class="stepper-item ">
                <span class="step-counter">3</span>
                <span class="step-name">Order complete</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container order-form">
        <div className="row mt-3">
          <div className="col-12 col-md-8">
            <h3 className="title-1">Billing Details</h3>
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="firstname">First Name</Label>
                    <Input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="First Name"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="lastname">Last Name</Label>
                    <Input
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Last Name"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="companyname">Company Name</Label>
                <Input
                  type="text"
                  name="companyname"
                  id="companyname"
                  placeholder="Company Name"
                />
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="email">Email Address</Label>
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleCity">City</Label>
                    <Input type="text" name="city" id="exampleCity" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleState">State</Label>
                    <Input type="text" name="state" id="exampleState" />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="exampleZip">Zip</Label>
                    <Input type="text" name="zip" id="exampleZip" />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheck" />
                <Label for="exampleCheck" check>
                  Create an Account?
                </Label>
              </FormGroup>
              <p>
                Create an account by entering the information below. If you are
                a returning customer please login at the top of the page.
              </p>
              <Button className="btn-success">Sign in</Button>
            </Form>
            <h3 className="title-1 mt-5">Additional Information</h3>
            <FormGroup>
              <Label for="textarea">Order Notes</Label>
              <Input
                type="textarea"
                name="textarea"
                id="textarea"
                placeholder="your order notes..."
              />
            </FormGroup>
          </div>
          <div className="col-12 col-md-4">
            <h3 className="title-1">Your order</h3>
            <Form className="bg-light">
              <Table>
                <thead>
                  <tr>
                    <th className="border-top-0">Product</th>
                    <th className="border-top-0">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="sm mr-3">x 1</span>Bacon Burger
                      <br />
                      Base price: $0.00 <br />
                      Pick Size ( $25.90 ):
                      <br />
                      29 cm
                    </td>
                    <td>$25.90</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="sm mr-3">x 1</span>Pepperoni Pizza
                      <br />
                      Base price: $0.00 <br />
                      Pick Size ( $25.90 ):
                      <br />
                      29 cm
                    </td>
                    <td>$25.90</td>
                  </tr>
                  <tr>
                    <td>Subtotal</td>
                    <td>$51.80</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>$51.80</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <Form className="mt-5">
                        <CustomInput
                          className="mt-2"
                          type="radio"
                          id="CustomRadio"
                          name="customRadio"
                          label="Direct Bank Transfer"
                        />
                        <span className="text-muted">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order won’t be shipped until the funds have
                          cleared in our account.
                        </span>
                        <CustomInput
                          className="mt-2"
                          type="radio"
                          id="CustomRadio2"
                          name="customRadio"
                          label="Check Payments"
                        />
                        <CustomInput
                          className="mt-2"
                          type="radio"
                          id="CustomRadio3"
                          name="customRadio"
                          label="Cash on Delivery"
                        />
                        <CustomInput
                          className="mt-2"
                          type="radio"
                          id="CustomRadio4"
                          name="customRadio"
                          label="PayPal"
                        />
                        <FormGroup check inline>
                          <Label check>
                            <Input className="mt-5" type="checkbox" />
                            I’ve read and accept the terms & conditions *
                          </Label>
                        </FormGroup>
                        <Link to="/order3">
                          <Button className="mt-5">Submit Order</Button>
                        </Link>
                      </Form>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Order2;
