import React from "react";

const Operators = () => {
  const age = 15;
  const isGreen = false;
  const names = ["lethabo", "Curtis", "Nare", "Kgetho", "Bontle"];
  const cars = ["Bwm", "Renualt", "Kia", "Haval"];
  const navItems = ['Home','ContactUs','Gallery','AboutUs']

  return (
    <div>
      {age >= 18 ? <h1>over age</h1> : <h1>under age</h1>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>colored text.... </h1>
      <h2 style={{ fontSize: "" }}>font-size controller....</h2>
      <h1>
        {cars.map((car, key) => {
          return <h1 key={key}>{car}</h1>;
        })}
      </h1>
          <div className="nav">
            <ul>
              {navItems.map((item,key)=>{
                return <li key={key}>{item}</li>
              })}
            </ul>
          </div>
    </div>
  );
};
export default Operators;
