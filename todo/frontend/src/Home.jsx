import React, { useEffect } from "react";
import axios from "axios";
import Create from "./Create";
import { useState } from "react";
import { CiTrash } from "react-icons/ci";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    axios
      .get("http://localhost:8080/api/todos/")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:8080/api/todos/update/" + id)
      .then(() => fetchTodos())
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8080/api/todos/delete/" + id)
      .then(() => fetchTodos())
      .catch((err) => console.log(err));
  };
  return (
    <div className="main">
      <h2>Todo List</h2>
      <Create />

      {todos.length === 0 ? (
        <div>No Tasks </div>
      ) : (
        todos.map((todo) => (
          <div key={todo._id} className="taskList">
            <div
              className={`task ${todo.isCompleted ? "completed" : ""}`}
              onClick={() => handleEdit(todo._id)}
            >
              <p>{todo.task}</p>
            </div>
            <div onClick={() => handleDelete(todo._id)}>
              <CiTrash />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
