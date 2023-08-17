import React,{useContext} from "react";
import { HomeContext } from "../pages/Home";

const Company = () => {
    const username = useContext(HomeContext);
  return (
    <div>
      <h3>this is the cumpany homepage {username}</h3>
    </div>
  );
};

export default Company;
