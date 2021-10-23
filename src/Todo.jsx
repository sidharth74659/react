import { func } from "prop-types";
import { useState } from "react";

let globalID = 0;

export default function Todo() {
  const [todos, setTodos] = useState([]); // for todo-list update
  const [task, setTask] = useState(""); //for input value update

  function addTask(event) {
    event.preventDefault();

    setTodos((oldTodos) => {
      setTask("")
      return [...oldTodos, { task, id: globalID++ }]
    });
    
  }

  function deleteTask(key) {
    setTodos(oldTodos => oldTodos.filter(item => item.id!== key))
  }

  function deleteAll() {
    setTodos([])
    globalID = 0
  }

  return (
    <>
      <h1>Todo app</h1>
      <button onClick={deleteAll}>Delete All</button>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter an item"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button type="submit" className="btn">
          Add Task
        </button>
      </form>
      <ul>
        {todos.map((item) => {
          return (
            <div key={item.id}>
              <li>{item.task} ({item.id})</li>
              <button onClick={() => deleteTask(item.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </>
  );
}
