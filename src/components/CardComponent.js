import React, { Component } from "react";
import {
  Media,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row,
  FormFeedback,
  Form,
  Table,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { Control, Errors, actions } from "react-redux-form";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";

function RenderOrder() {
  return (
    <Media>
      <Media left middle href="/menu">
        <Media
          src={baseUrl + "images/p1.jpg"}
          alt="pizza"
          width="100"
          height="100"
        />
      </Media>
      <Media body className="order-media ml-4 mt-3">
        <Media heading>Bacon Burger</Media>
        made with fresh ingridient
      </Media>
      <Media body className="order-media ml-4 mt-3">
        <Media heading>Pick size</Media>
        28 cm
      </Media>
    </Media>
  );
}

function Order() {
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

      <h3>Order</h3>
      <hr className=" section-title" />

      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <ul class="stepper-wrapper">
              <li class="stepper-item active">
                <span class="step-counter">1</span>
                <span class="step-name">Shopping Cart</span>
              </li>
              <li class="stepper-item ">
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
      <div className="container">
        <div className="row mt-5 border-bottom">
          <div className="col-3 col-md-5">Product</div>
          <div className="col-3 col-md-2">Price</div>
          <div className="col-3 col-md-2">Quantity</div>
          <div className="col-3 col-md-2">Total</div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <ul className="list-unstyled">
              <li className="row border-bottom ">
                <div className="col-12 col-md-5">
                  <RenderOrder />
                </div>
                <div className="col-3 col-md-2 mt-4">$25.90</div>
                <div className="col-3 col-md-2 mt-4">
                  <Form>
                    <FormGroup>
                      <Input
                        type="select"
                        name="selectMulti"
                        id="exampleSelectMulti"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                  </Form>
                </div>
                <div className="col-3 col-md-2 mt-4">$25.90</div>
                <div className="col-3 col-md-1 mt-4">
                  <a href="#">
                    <i className="fa fa-trash"></i>
                  </a>
                </div>
              </li>

              <li className="row border-bottom mt-3 ">
                <div className="col-12 col-md-5">
                  <RenderOrder />
                </div>
                <div className="col-3 col-md-2 mt-4">$25.90</div>
                <div className="col-3 col-md-2 mt-4">
                  <Form>
                    <FormGroup>
                      <Input
                        type="select"
                        name="selectMulti"
                        id="exampleSelectMulti"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                  </Form>
                </div>
                <div className="col-3 col-md-2 mt-4">$25.90</div>
                <div className="col-3 col-md-1 mt-4">
                  <a href="#">
                    <i className="fa fa-trash"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-4 mb-5">
            <InputGroup>
              <Input placeholder="Coupon code" />
              <InputGroupAddon addonType="append">
                <InputGroupText className="bg-success">
                  Apply Coupon
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className="col-12 col-md-2 offset-md-6">
            <Link to="/order2">
              <a
                className="btn btn-danger  active"
                role="button"
                aria-pressed="true"
              >
                Proceded to checkout
              </a>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Order;
