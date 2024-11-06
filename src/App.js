const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello from dashboard abc");
});

app.use("/hello", (req, res) => {
  res.send("Hello hello hello");
});

app.use("/test", (req, res) => {
  res.send("Hello this is my server");
});

app.listen(3000, () => {
  console.log("server has been started successfully");
});
