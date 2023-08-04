import React from "react";
import PlanetList from "./PlanetList";

const Exercise = () => {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div>
        {planets.map((planet, key)=>{
          return planet.isGasPlanet? <PlanetList name={planet.name}/>: null
        })}
    </div>
  );
};



export default Exercise;
