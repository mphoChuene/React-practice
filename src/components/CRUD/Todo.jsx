import React, { useState } from "react";
import { TaskProps } from "./TaskProps";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");

  const handleInput = (event) => {
    setTask(event.target.value);
  };
  const addTask = () => {
    const todoObj = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: task,
      isComplete: false,
    };
    setTodoList([...todoList, todoObj]);
  };

  const deleteTask = (id) => {
    const newTodo = todoList.filter((todoObj) => {
      return todoObj.id !== id;
      // if (todoObj.id === id) {
      // return false;
      // } else {
      //   return true;
      // }
    });
    setTodoList(newTodo);
  };
  console.log(todoList)
  const completed = (id) => {
    const completedTodo = todoList.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, isComplete: true };
      } else {
        return todoObj;
      }
    });
    setTodoList(completedTodo);
  };

  return (
    <div>
      <div className="inputs">
        <input type="text" onChange={handleInput} />
        <button onClick={addTask}>add</button>
      </div>
      <div className="todolist">
        {todoList.map((task) => {
          return (
            <TaskProps
              key={task.id}
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
              completed={completed}
              completedtask={task.completed}
              isComplete={task.isComplete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
