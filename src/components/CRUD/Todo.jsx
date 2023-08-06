import React, { useState } from 'react'

const Todo = () => {
    const [todoList,setTodoList]=useState([])
    const [task,setTask]=useState('')

    const handleInput=(event)=>{
        setTask(event.target.value)
    }

    const addTask =()=>{
        setTodoList([...todoList,task])
    }

  return (
    <div>
        <div className="inputs">
            <input type="text" onChange={handleInput} />
            <button onClick={addTask}>add</button>
        </div>
        <div className="task">
            {todoList.map((task)=>{
                return <h4>{task}</h4>
            })}
        </div>
    </div>
  )
}

export default Todo