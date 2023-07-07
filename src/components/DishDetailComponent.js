import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import Review from "./ReviewComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

function RenderDish({ dish }) {
  return (
    <a href={baseUrl + dish.big_image} target="_blank">
      <img
        className="img-fluid"
        src={baseUrl + dish.big_image}
        alt={dish.name}
      />
    </a>
  );
}

function RenderComments({ comments, dishId }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  if (comments != null)
    return (
      <React.Fragment>
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">
            <Stagger in>
              {comments.map((comment) => {
                return (
                  <Fade in>
                    <li key={comment.id}>
                      <p>{comment.comment}</p>
                      <p>
                        -- {comment.author} ,{" "}
                        {new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }).format(new Date(Date.parse(comment.date)))}
                      </p>
                    </li>
                  </Fade>
                );
              })}
            </Stagger>
          </ul>
        </div>
        <div>
          <Button outline onClick={toggle}>
            <span className="fa fa-pencil fa-lg"></span> Submit Comment
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Do Something
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </React.Fragment>
    );
  else return <div></div>;
}

const DishDetail = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null)
    return (
      <React.Fragment>
        <div className="container">
          <div className="row ">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr className=" section-title" />
            </div>
          </div>
          <FadeTransform
            in
            transformProps={{
              exitTransform: "scale(0.5) translateY(-50%)",
            }}
          >
            <div className="row">
              <div className="col-12 col-md-6">
                <RenderDish dish={props.dish} />
              </div>
              <div className="col-12 col-md-6">
                <RenderComments comments={props.comments} />
              </div>
            </div>
            <div className="row">
              <div className="d-none d-md-block col-md-6 mb-5 mt-3">
                <a href={baseUrl + props.dish.small_image} target="_blank">
                  <img
                    className="img-thumbnail rounded float-left"
                    width="120"
                    height="150"
                    src={baseUrl + props.dish.small_image}
                    alt={props.dish.name}
                  />
                </a>
                <a href={baseUrl + props.dish.image} target="_blank">
                  <img
                    className="img-thumbnail rounded float-left"
                    width="120"
                    height="150"
                    src={baseUrl + props.dish.image}
                    alt={props.dish.name}
                  />
                </a>
              </div>
            </div>
          </FadeTransform>
        </div>

        <div className="bg-light mb-5">
          <Nav tabs className="justify-content-center bg-white">
            <NavItem>
              <NavLink
                className={classnames(
                  { active: activeTab === "1" },
                  "bg-light"
                )}
                onClick={() => {
                  toggle("1");
                }}
              >
                Description
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Additional Info
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "3" })}
                onClick={() => {
                  toggle("3");
                }}
              >
                Nutritions
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "4" })}
                onClick={() => {
                  toggle("4");
                }}
              >
                Reviews
              </NavLink>
            </NavItem>
          </Nav>
          <div className="container">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row className="mt-5">
                  <Col sm="12">
                    <p>
                      Although the legendary Double Burger really needs no
                      introduction, please allow us... Tucked in between three
                      soft buns are two all-beef patties, cheddar cheese,
                      ketchup, onion, pickles and iceberg lettuce. Hesburger’s
                      own paprika and cucumber mayonnaise add the crowning
                      touch. Oh baby!
                    </p>
                    <p>
                      <strong> Ingredients:</strong> Dr. Praeger's Black Bean
                      Burger, Focaccia bun, Balsamic Vinaigrette, Pesto, Tomato,
                      Swiss Cheese
                    </p>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <div className="mt-5">
                      <Table responsive>
                        <tbody>
                          <tr>
                            <th scope="row" className="border-right">
                              <span>Pizza</span>
                              <br />
                              <span className="text-muted">28 cm size</span>
                            </th>
                            <td>
                              <span className="value">728</span>Energy/Kj
                            </td>
                            <td>
                              <span className="value">1054</span>energy/kcal
                            </td>
                            <td>
                              <span className="value">68</span>fat/g
                            </td>
                            <td>
                              <span className="value">25</span>carbohydrate/g
                            </td>
                            <td>
                              <span className="value">48</span>sugar/g
                            </td>
                            <td>
                              <span className="value">548</span>protein/g
                            </td>
                            <td>
                              <span className="value">9</span>salt
                            </td>
                            <td>
                              <span className="value">15</span>lactose/g
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" className="border-right">
                              <span>Allergies</span>
                            </th>
                            <td>Egg</td>
                            <td>milk protein</td>
                            <td>sesame seed</td>
                            <td>lactose</td>
                            <td>gluten</td>
                            <td>mustard</td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                </Row>
                <hr className="border-dotted" />
                <Row>
                  <Col sm="12" className="mt-5">
                    <div className="table-responsive">
                      <Table striped bordered>
                        <thead>
                          <tr>
                            <th>size</th>
                            <th>Energy/Kj</th>
                            <th>Fat/G</th>
                            <th>Carbohydrate/G</th>
                            <th>Sugar/G</th>
                            <th>Protein/G</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">28 cm</th>
                            <td>728</td>
                            <td>68</td>
                            <td>25</td>
                            <td>25</td>
                            <td>548</td>
                          </tr>
                          <tr>
                            <th scope="row">35 cm</th>
                            <td>958</td>
                            <td>98</td>
                            <td>48</td>
                            <td>74</td>
                            <td>960</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4" className="bg-light mb-5" id="reviewform">
                <Row>
                  <Col sm="12">
                    <Form>
                      <FormGroup
                        tag="fieldset"
                        className="form-check form-check-inline rating-group mt-5"
                      >
                        <legend>
                          <strong>Your Rating</strong>
                        </legend>

                        <span className="fa fa-emo border border-warning "></span>
                        <FormGroup check>
                          <Label check className="rating_label">
                            <Input
                              type="radio"
                              name="rating"
                              value="1"
                              className="rating_input"
                            />{" "}
                            <span className="fa fa-star rating_icon rating_icon_star"></span>
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check className="rating_label">
                            <Input
                              type="radio"
                              name="rating"
                              value="2"
                              className="rating_input"
                            />{" "}
                            <span className="fa fa-star rating_icon rating_icon_star"></span>
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check className="rating_label">
                            <Input
                              type="radio"
                              name="rating"
                              value="3"
                              className="rating_input"
                            />{" "}
                            <span className="fa fa-star rating_icon rating_icon_star"></span>
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check className="rating_label">
                            <Input
                              type="radio"
                              name="rating"
                              value="4"
                              className="rating_input"
                            />{" "}
                            <span className="fa fa-star rating_icon rating_icon_star"></span>
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check className="rating_label">
                            <Input
                              type="radio"
                              name="rating"
                              value="5"
                              className="rating_input"
                            />{" "}
                            <span className="fa fa-star rating_icon rating_icon_star"></span>
                          </Label>
                        </FormGroup>
                      </FormGroup>
                    </Form>
                    <h5 className="col-md-10 offset-md-1 mb-5">
                      Leave a Comment for {props.dish.name}
                    </h5>
                    <div className="col-md-8 offset-md-2 mb-5">
                      <Review />
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3" className="bg-light mb-5">
                <Row className="mt-5">
                  <Col md={3} sm={12}>
                    <h3>Made fresh daily with...</h3>
                  </Col>

                  <Col md={3} sm={4}>
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={baseUrl + "images/t1.jpg"}
                          alt="ingtrdient picture "
                        />
                      </div>
                      <div className="col-6">
                        <p> 100% Whole Milk Mozarella</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} sm={4}>
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={baseUrl + "images/t2.jpg"}
                          alt="ingtrdient picture "
                        />
                      </div>
                      <div className="col-6">
                        <p> Ecological Mushrooms</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} sm={4}>
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={baseUrl + "images/t3.jpg"}
                          alt="ingtrdient picture "
                        />
                      </div>
                      <div className="col-6">
                        <p> Zesty Pepperoni</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} sm={12}></Col>
                  <Col md={3} sm={4}>
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={baseUrl + "images/t4.jpg"}
                          alt="ingtrdient picture "
                        />
                      </div>
                      <div className="col-6">
                        <p> Seasoned Italian Sausage</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} sm={4}>
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={baseUrl + "images/t5.jpg"}
                          alt="ingtrdient picture "
                        />
                      </div>
                      <div className="col-6">
                        <p> Fresh Daily Spinach</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </React.Fragment>
    );
  else return;
  <div></div>;
};

export default DishDetail;
