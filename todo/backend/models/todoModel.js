require("dotenv").config();
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const todoSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const todoModel = model("Todo", todoSchema);
module.exports = todoModel;
