import React from "react";
import {useContext} from 'react'
import {AppContext} from '../Routers'
const About = () => {
    const {setUsername}=useContext(AppContext)
  const [newUser, setNewUser] = useState("");
  return (
    <div>
      <h2>this is the About page and the userlogged in is:{user} </h2>
      <input type="text" onChange={(event) => setNewUser(event.target.value)} />
      <button onClick={setUsername(newUser)}>update user</button>
    </div>
  );
};

export default About;
