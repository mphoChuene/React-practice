import React, { useContext } from "react";
import { userContext } from "./Home";

const About = () => {
  const username = useContext(userContext);
  return (
    <div>
      <h4>the user loggedin is {username}</h4>
    </div>
  );
};

export default About;
