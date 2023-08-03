import React from "react";

const Operators = () => {
  const age = 15;
  const isGreen = false

return(
  <div>
    {age >= 18 ? <h1>over age</h1>:  <h1>under age</h1>}
    <h1 style={{color: isGreen ? 'green': 'red'}}>colored text.... </h1>
    <h2 style={{fontSize:''}}>font-size controller....</h2>
  </div>
)}
export default Operators
