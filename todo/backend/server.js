const express = require("express");
const connectDB = require("./db");
const cors = require("cors");
const app = express();
const todoRouter = require("./routes/todoRouter.js");

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(8080, () => {
  console.log("Server is running on port", PORT);
  connectDB();
});

app.use("/api/todos", todoRouter);

app.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});
