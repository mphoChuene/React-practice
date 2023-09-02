import React from "react";
import PropTypes from "prop-types";
const Person = (props) => {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h3>Email: {props.email}</h3>
      <h3>Age: {props.age}</h3>
      <h3>This person {props.isMarried ? "is" : "is not"} married</h3>
      {props.friends.map((friend) => {
        return <h4>{friend}</h4>;
      })}
    </div>
  );
};

Person.prototype = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
};

export default Person;
