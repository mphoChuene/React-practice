import React from "react";
import Mapping from "./Mapping";

const Operators = () => {
  const age = 15;
  const isGreen = false;
  const names = ["lethabo", "Curtis", "Nare", "Kgetho", "Bontle"];
  const cars = ["Bwm", "Renualt", "Kia", "Haval"];
  const navItems = ["Home", "ContactUs", "Gallery", "AboutUs"];
  const users = [
    { name: "Mpho", age: 26 },
    { name: "lethabo", age: 25 },
    { name: "Kgetho", age: 21 },
    { name: "Curtis", age: 35 },
  ];

  const vehicles = [{brand:'Audi',model:'RS3'},{brand:'Haval',model:'Julion'},{brand:'Ford',model:'Ranger'},{brand:'Suzuki',model:'Swift'}]

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
          {navItems.map((item, key) => {
            return <li key={key}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="users">
        {users.map((user, key) => {
          return <Userlist name={user.name} age={user.age} />;
        })}
      </div>
      <div className="map">
        {users.map((user, key) => {
          return <Mapping name={user.name} age={user.age} />;
        })}
      </div>

      {/* mapping out cars  using both an external prop and internal prop*/}

      <div className="cars">
       {vehicles.map((vehicle,key)=>{
        return(
          <VehicleList brand ={vehicle.brand} model ={vehicle.model}/>
        )
       })}
      </div>
    </div>
  );
};

const VehicleList = (props)=>{
   return(
    <h1>{props.brand} {props.model}</h1>
   )
}


const Userlist = (props) => {
  return (
    <div>
      {props.name}
      {props.age}
    </div>
  );
};

export default Operators;
