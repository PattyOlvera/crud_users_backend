const express = require("express");
// const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const User = require("./models/User");
const dbConfig = require("./config/database.config.js");

mongoose.Promise = global.Promise;

// Creating the express app
const app = new express();

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Succesfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

// Parse request of app requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Require Users routes
require("./app/routes/user.routes.js")(app);

//listen for requests
app.listen(4000, () => {
  console.log("App listening on port 4000");
});

app.get("/", (req, res) => {
  console.log("Welcome to the jungle");
  res.json({
    message: "Welcome to the CRUD Users App.",
  });
});
