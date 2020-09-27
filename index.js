const express = require("express");
const path = require("path");
const app = new express();

app.listen(4000, () => {
  console.log("App listening on port 4000");
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/register.html"));
});

app.get("/search", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/search.html"));
});
