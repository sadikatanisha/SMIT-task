require("dotenv").config();
const todoModel = require("../models/todoModel");

const getTodos = async (req, res) => {
  try {
    const todos = await todoModel.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createTodo = async (req, res) => {
  const task = req.body.task;
  console.log(req.body);
  try {
    const newTodo = await todoModel.create({ task: task });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTodo = await todoModel.findByIdAndUpdate(
      { _id: id },
      { isCompleted: true }
    );
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await todoModel.findByIdAndDelete(id);

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
