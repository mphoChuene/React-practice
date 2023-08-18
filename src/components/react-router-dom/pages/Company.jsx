import React, { useContext,useState } from "react";
import {userContext} from "./Home";

const Company = () => {
  const [username, setUsername] = useContext(userContext);
  const [updateUser,setUpdateUser]=useState('')

  const handleInput =(e)=>{
    setUpdateUser(e.target.value)
  }

  const handleUpdate=()=>{
    setUsername(updateUser)
  }

  return (
    <div>
      <h4>this is the company page {username}</h4>
      <div className="inputs">
        <input type="text"  onChange={handleInput}/>
        <button onClick={handleUpdate}>update</button>
      </div>
    </div>
  );
};

export default Company;
