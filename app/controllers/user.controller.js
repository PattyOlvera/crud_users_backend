const User = require("../models/user.js");

//Create and save a new User
exports.create = (req, res) => {
  // Validate request
  if (req.body.content) {
    return res.status(400).send({
      message: "User content cannot be empty!",
    });
  }
  // Create a User
  const user = new User({
    name: req.body.name,
    lastnamme: req.body.lastname,
    email: req.body.email,
  });
  // Save user in the database
  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while creating the User.",
      });
    });
};

// Retrieve and return all users from the database
exports.findAll = (req, res) => {
  exports.findAll = (req, res) => {
    User.find()
      .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error ocurred while retrieving all the users",
        });
      });
  };
};

// Find a single user with a userID
exports.findOne = (req.res) => {};

// Update a user identified by the userID in the request
exports.update = (req.res) => {};

// Delete a user with the specified userID in the request
exports.delete = (req, res) => {};
