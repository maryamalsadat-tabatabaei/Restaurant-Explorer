import React from "react";
import { Breadcrumb, BreadcrumbItem, Table } from "reactstrap";
import { Link } from "react-router-dom";

function Order3() {
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
              <li class="stepper-item completed">
                <span class="step-counter">1</span>
                <span class="step-name">Shopping Cart</span>
              </li>
              <li class="stepper-item completed">
                <span class="step-counter">2</span>
                <span class="step-name">Checkout</span>
              </li>
              <li class="stepper-item active">
                <span class="step-counter">3</span>
                <span class="step-name">Order complete</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 ">
            <i className="fa fa-check-circle fa-5x"></i>
          </div>
          <div className="col-12 mt-5">
            <h3>Order Received</h3>
            <p className="text-muted mb-5">
              Thank you. Your order has been received.
            </p>
            <Table responsive bordered>
              <thead>
                <tr>
                  <th>ORDER NUMBER:</th>
                  <th>DATE:</th>
                  <th>TOTAL:</th>
                  <th>PAYMENT METHOD:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>645</td>
                  <td>February 2, 2021</td>
                  <td>$25.90</td>
                  <td>Direct Bank Transfer</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="col-12 col-md-3 mt-5">
            <h3 className="align-items-start">Billing Address</h3>
            <div className="underline"></div>
            <ul className="list-unstyled align-items-start">
              <li>Transvelo</li>
              <li>Mohamed Anas</li>
              <li>No 27 Maraicoir Street, Mannady</li>
              <li>chennai - 600001</li>
              <li>Tamil Nadu, India</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Order3;
