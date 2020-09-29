const mongoose = require("mongoose");
const User = require("./app/models/User");

mongoose.connect("mongodb://localhost/crud_users_app", {
  useNewUrlParser: true,
});

// ********** Adding a user
// User.create(
//   {
//     name: "Homer",
//     lastname: "Simpson",
//     email: "homer.simpson@gmail.com",
//   },
//   (error, user) => {
//     console.log(error, user);
//   }
// );

// ******** Reading data from MongoDB
// User.find({}, (error, user) => {
//   console.log(error, user);
// });

// ******** Adding a second user
// User.create(
//   {
//     name: "Bart",
//     lastname: "Simpson",
//     email: "bart.simpson@gmail.com",
//   },
//   (error, user) => {
//     console.log(error, user);
//   }
// );

// Finding a user that begins with B
// User.find({ name: /B/ }, (error, user) => {
//   console.log(error, user);
// });

// Finding a document by Id
// var id = "5f70d81300861b5fb876fd19";

// User.findById(id, (error, user) => {
//   console.log(error, user);
// });

// Updating Records in MongoDB
// var id = "5f70d81300861b5fb876fd19";

// User.findByIdAndUpdate(id, { name: "Don Homerone" }, (error, user) => {
//   console.log(error, user);
// });

// Deleting a single record
// var id = "5f70d81300861b5fb876fd19";

// User.findByIdAndDelete(id, (error, user) => {
//   console.log(error, user);
// });
