import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    predictInfo()
  }, []);

  const predictInfo = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setData(res.data);
      console.log(res.data)
    });
  };

  return (
    <div>
      <div className="input">
        <input type="text" onChange={(event) => setName(event.target.value)} />
        <button onClick={predictInfo}>predict age</button>
      </div>
      <div className="display">
        <h4>name: {data?.name}</h4>
        <h4>age: {data?.age}</h4>
        <h4>count: {data?.count}</h4>
      </div>
    </div>
  );
};

export default FetchData;
