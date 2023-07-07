import React from "react";
import "./PersonListComponent.css";

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "john",
      job: "developer",
    },
    {
      img: 34,
      name: "bob",
      job: "designer",
    },
    {
      img: 62,
      name: "peter",
      job: "actor",
    },
  ];

  return (
    <React.Fragment>
      <Person person={people[0]}>I am the professionalist in my field.</Person>
    </React.Fragment>
  );
};

const Person = (props) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${props.person.img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="" />
      <h4>{props.person.name} </h4>
      <h4>{props.person.job} </h4>
      {props.children}
    </div>
  );
};

export default PersonList;
