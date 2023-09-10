import React from "react";
import Person from "./Person";

const TypeSafety = () => {
  return (
    <div>
      <h2>typescript practice</h2>
      <Person
        name="Mpho"
        email="mpho@email"
        age={21}
        isMarried={true}
        friends={["Mpho", "Lethabo", "Chris", "Vincent", "innocent", "Curtis"]}
      />
      <Person
        name="Chris"
        email="chris@email"
        age={26}
        isMarried={false}
        friends={["Mpho", "Abbigail", "Vincent", "innocent", "Abrina"]}
      />
      <Person
        name="Kgetho"
        email="Kgeth@email"
        age={21}
        isMarried={false}
        friends={[
          "Mpho",
          "Abbigail",
          "Vincent",
          "innocent",
          "Abrina",
          "Goodman",
        ]}
      />
    </div>
  );
};

export default TypeSafety;
