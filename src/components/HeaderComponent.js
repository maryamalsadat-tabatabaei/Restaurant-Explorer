import React, { Component, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";

const Header = (props) => {
  const [isNavOpen, setIsOpen] = useState(false);
  const [isModalOpen, setModal] = useState(false);

  const toggle = () => setIsOpen(!isNavOpen);
  const toggleModal = () => setModal(!isModalOpen);
  const handleLogin = (event) => {
    toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <div className="container">
          <NavbarBrand href="/">Pizzaro</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isNavOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"></span> Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/gallery">
                  <span className="fa fa-gallery-thumbnails fa-lg"></span>{" "}
                  Gallery
                </NavLink>
              </NavItem>

              {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
              <NavItem>
                <Button outline onClick={toggleModal}>
                  <span className="fa fa-sign-in fa-lg"></span> Login
                </Button>
              </NavItem>
              <NavItem className="ml-5">
                <NavLink className="nav-link text-white" to="/order" id="card">
                  <span className="fa fa-motorcycle fa-lg mr-2"></span> Go to
                  Card
                  {/* <ul class="sub-menu text-dark list-unstyled wave">
                    <li>
                      <span>2 items</span> <span>$50.00</span>
                    </li>
                  </ul> */}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                //  innerRef={(input) =>this. username = input}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                // innerRef={(input) => this.password = input}
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="remember"
                  // innerRef={(input) => this.remember = input}
                />
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>

      <div className="menu-icon mb-5">
        <div className="container d-md-block d-none">
          <ul className="list-unstyled menu2">
            <li className="menu-item2">
              <a href="#">
                <img
                  className="mr-2"
                  src={baseUrl + "images/pizza.png"}
                  height="60"
                  width="60"
                />
                Pizza
              </a>
            </li>
            <li className="menu-item2">
              <a href="#">
                <img
                  className="mr-2"
                  src={baseUrl + "images/burger.png"}
                  height="60"
                  width="60"
                />
                Burgur
              </a>
            </li>
            <li className="menu-item2">
              <a href="#">
                <img
                  className="mr-2"
                  src={baseUrl + "images/salad.png"}
                  height="70"
                  width="70"
                />
                Salad
              </a>
            </li>
            <li className="menu-item2">
              <a href="#">
                <img
                  className="mr-2"
                  src={baseUrl + "images/sandwich.png"}
                  height="50"
                  width="50"
                />
                Sandwich
              </a>
            </li>
            <li className="menu-item2">
              <a href="#">
                <img
                  className="mr-2"
                  src={baseUrl + "images/wrap.png"}
                  height="70"
                  width="70"
                />
                Wrap
              </a>
            </li>
            <li className="menu-item2">
              <a href="#">
                <img
                  className="mr-2"
                  src={baseUrl + "images/french-fries.png"}
                  height="65"
                  width="65"
                />
                Fries
              </a>
            </li>
            <li className="menu-item2">
              <a href="#">
                <img
                  className="mr-2"
                  src={baseUrl + "images/ice-cream.png"}
                  height="60"
                  width="60"
                />
                Ice-Cream
              </a>
            </li>
            <li className="menu-item2">
              <a href="#">
                <img
                  className="mr-2"
                  src={baseUrl + "images/cocktail.png"}
                  height="70"
                  width="70"
                />
                Drinks
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
