import React, { useContext, useState } from "react";
import { HomeContext } from "../pages/Home";

const About = () => {
  const [username, setUsername] = useContext(HomeContext);
  const [updatedUser, setUpdatedUser] = useState("");
  const handleInput = (e) => {
    setUpdatedUser(e.target.value);
  };
  const updateName = () => {
    setUsername(updatedUser);
  };
  return (
    <div>
      <div className="input">
        <h3>this is the about page and the user loggedin is {username}</h3>
        <input type="text" onChange={handleInput} />
        <button onClick={updateName}>update</button>
      </div>
    </div>
  );
};

export default About;
