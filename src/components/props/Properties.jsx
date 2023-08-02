import React from "react";

const Properties = (props) => {
  const buttonClick = props.buttonClick;
  const title = props.title;
  return (
    <div>
      <button onClick={buttonClick}>{title}</button>
    </div>
  );
};

export default Properties;
