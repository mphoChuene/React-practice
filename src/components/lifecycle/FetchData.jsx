import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";


const FetchData = () => {

    const [catfact,setCatFact]=useState('')

useEffect(()=>{
 axios.get('https://catfact.ninja/fact').then((res)=>{setCatFact(res.data.fact)})
 
},[])
  return (
    <div>
      <div className="body">
        <h4> hellow world</h4>
        <h5>{catfact}</h5>
        
        <button>generate fact</button>
      </div>
    </div>
  );
};

export default FetchData;
