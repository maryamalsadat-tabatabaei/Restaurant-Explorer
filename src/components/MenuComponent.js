import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";

function RenderMenuItem({ dish }) {
  return (
    <CardDeck>
      <Card>
        <Link to={`/menu/${dish.id}`} className="menu-item">
          <CardImg
            top
            width="100%"
            src={baseUrl + dish.image}
            alt={dish.name}
          />
          <CardBody>
            <CardTitle tag="h5">{dish.name}</CardTitle>
            <CardSubtitle tag="h3" className="mb-2">
              {dish.label == "Hot" ? (
                <span className="badge badge-pill badge-danger">
                  {dish.label}
                </span>
              ) : dish.label == "New" ? (
                <span className="badge badge-pill badge-info">
                  {dish.label}
                </span>
              ) : (
                <span className="badge badge-pill badge-success">
                  {dish.label}
                </span>
              )}
            </CardSubtitle>
            <CardText className="text-muted">{dish.description}</CardText>
            <div class="hover-area">
              <a className="btn btn-lg">Add to card</a>
            </div>
          </CardBody>
        </Link>
      </Card>
    </CardDeck>
  );
}

const Menu = (props) => {
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div className="col-12 mt-5 col-md-4" key={dish.id}>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });
  if (props.dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.dishes.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.dishes.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
};

export default Menu;
