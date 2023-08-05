import React,{useState} from "react";

const Exercise = () => {

    const [count,setCount]=useState(0)

    // button functions
    const increment=()=>{
        setCount(count +1)
    }
    const decrement=()=>{
        setCount(count -1)
    }
    const restart=()=>{
        setCount(0)
    }

  return (
    <div>
      <h1>usestate hook Exercise:</h1>
        <div className="counter" style={{paddingLeft:"18vw", fontSize:'2rem'}}>{count}</div>
      <button onClick={increment}>increase</button>
      <button onClick={restart}>Reset</button>
      <button onClick={decrement}>decrease</button>
    </div>
  );
};

export default Exercise;
