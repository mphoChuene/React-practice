import axios from "axios";
import React, { useState } from "react";

const ExerciseApi = () => {
  const [excuse, setExcuse] = useState("");

  const family = () => {
    axios
      .get("https://excuser-three.vercel.app/v1/excuse/family/")
      .then((res) => {
        setExcuse(res.data[0].excuse);
      });
  };
  const developer = () => {
    axios
      .get("https://excuser-three.vercel.app/v1/excuse/developers/")
      .then((res) => {
        setExcuse(res.data[0].excuse);
      });
  };
  const office = () => {
    axios
      .get("https://excuser-three.vercel.app/v1/excuse/office/")
      .then((res) => {
        setExcuse(res.data[0].excuse);
      });
  };

  return (
    <div>
      <div className="inputs">
        <h2>generate excuse:</h2>
        <button onClick={family}>family</button>
        <button onClick={developer}>office</button>
        <button onClick={office}>developer</button>
      </div>
      <div className="display">
        <h3>excuse : {excuse} </h3>
      </div>
    </div>
  );
};

export default ExerciseApi;
