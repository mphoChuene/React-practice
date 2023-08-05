import React,{useState} from "react";

const State = () => {

  const [text,setText]= useState('')

  // const [task,setTask] = useState('')
const handleText =(event)=>{
    setText(event.target.value)
}
 

  return (
    <div>
      <h2>usestate hook:</h2>
      <input type="text" placeholder="some text..." onChange={handleText} />

      {text}
     
    </div>
  );
};

export default State;
