import React, { useState } from "react";
import axios from "axios";
const Create = () => {
  const [task, setTask] = useState();

  const handleAddTodo = () => {
    axios
      .post("http://localhost:8080/api/todos/create", { task: task })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
        className="task-input"
      />
      <button type="button" className="add-button" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default Create;
