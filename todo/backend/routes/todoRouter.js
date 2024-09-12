const express = require("express");
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const todoRouter = express.Router();

todoRouter.get("/", getTodos);
todoRouter.post("/create", createTodo);
todoRouter.put("/update/:id", updateTodo);
todoRouter.delete("/delete/:id", deleteTodo);

module.exports = todoRouter;
