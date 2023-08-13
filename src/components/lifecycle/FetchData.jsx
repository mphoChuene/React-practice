import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [name, setName] = useState("");
const [predictedAge, setPredictedAge] = useState(null);
  useEffect(() => {
    guessAge();
  }, []);
  const guessAge = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };

  return (
    <div>
      <div className="input">
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button onClick={guessAge}>guess age</button>
      </div>
      <div className="output">
        <h4> name:{predictedAge?.name}</h4>
        <h4> age: {predictedAge?.age}</h4>
      </div>
    </div>
  );
};

export default FetchData;
