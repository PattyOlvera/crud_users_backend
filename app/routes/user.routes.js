module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  // Create a new User
  app.post("/users", users.create);

  // Display all users
  app.get("/users", users.findAll);

  // Retrieve a single User with userId
  app.get("/users/:userId", users.findOne);

  // Update a Note with noteId
  app.put("/users/:userId", users.update);

  // Delete a Note with noteId
  app.delete("/users/:userId", users.delete);
};
