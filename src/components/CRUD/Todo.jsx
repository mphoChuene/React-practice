import React, { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");

  const handleInput = (event) => {
    setTask(event.target.value);
  };
  const addTask = () => {
    const todoObj=[{
        id: todoList.length === 0 ? 1 :[todoList.length-1].id+1,
        taskName: task
    }]
    setTodoList([...todoList, taskName]);
  };
  const deleteTask =(task)=>{
   const newTodoList= todoList.filter((taskName)=>{
        if(task === taskName){
            return false
        } else {
            return true
        }
    })
    setTodoList(newTodoList)
  }

  return (
    <div>
      <div className="input-arera">
        <input type="text" onChange={handleInput} />
        <button onClick={addTask}>add</button>
      </div>
      <div className="viewing-list">
       {todoList.map((task)=>{
        return (
            <div className="container">
                    <h4>{Todo.taskName}</h4>
                    <button onClick={()=>deleteTask(task)}>delete</button>         
            </div>
        )
       })}
      </div>
    </div>
  );
};

export default Todo;
