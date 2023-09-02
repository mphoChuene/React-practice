import React from "react";
import Person from "./Person";

const TypeSafety = () => {
  return (
    <div>
      <h2>typescript practice</h2>
      <Person 
      name='Mpho'
      email='mpho@email'
      age= {21}
      isMarried ={true}
      friends= {['Mpho','Lethabo','Chris','Vincent']}/>
    </div>
  );
};

export default TypeSafety;
