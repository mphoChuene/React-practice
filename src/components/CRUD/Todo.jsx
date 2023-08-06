import React, { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");

  const handleInput = (event) => {
    setTask(event.target.value);
  };
  const addTask = () => {
    setTodoList([...todoList, task]);
  };
  const deleteTask=(taskName)=>{
        const newTodoList = todoList.filter((task)=>{
            if (taskName===task){
                return false
            } else {
                return true
            }
        })
        setTodoList(newTodoList)
  }
  return (
    <div>
      <div className="inputs">
        <input type="text" onChange={handleInput} />
        <button onClick={addTask}>add</button>
      </div>
      <div className="display">
        {todoList.map((task) => {
          return (
            <div className="container">
              <h4>{task}</h4>
              <button onClick={()=>deleteTask(task)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
