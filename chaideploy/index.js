require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.get("/twitter", (req, res) => {
  res.send("hello");
});

app.get("/login", (req, res) => {
  res.send("<h1> Login<h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>SUmit</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`app is listing on port ${port}`);
});
