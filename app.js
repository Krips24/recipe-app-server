// Import required modules
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const reactViews = require("express-react-views");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Create an Express application
const app = express();

// Set JSX as the view engine
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Enable parsing of request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB database (assuming it's running locally on the default port)
mongoose.connect("mongodb://127.0.0.1:27017/organicDB");

// Specify the views directory
app.set("views", path.join(__dirname, "views"));

// Define a MongoDB schema for users
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Create a MongoDB model based on the user schema
const User = mongoose.model("User", userSchema);

// Define routes for handling GET requests

// Default route, renders the login view
app.get("/", (req, res) => {
  res.render("login");
});

// Login route, renders the login view
app.get("/login", (req, res) => {
  res.render("login");
});

// Signup route, renders the signup view
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/home", (req,res) => {
  res.render("home");
})

// Define route for handling POST requests

// Signup form submission, adds a new user to the database
app.post("/signup", (req, res) => {
  // Hash the password using bcrypt
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while registering.");
    } else {
      // Create a new user with the hashed password
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
      });

      // Save the new user to the database
      newUser
        .save()
        .then(function () {
          res.render("home");
        })
        .catch(function (err) {
          console.log(err);
          res.status(500).send("An error occurred while registering.");
        });
    }
  });
});

app.post("/login", (req, res) => {
  const username = req.body.email;
  const password = req.body.password;

  User.findOne({ email: username })
    .then(function (foundUser) {
      if (foundUser) {
        bcrypt.compare(password, foundUser.password, function (err, result) {
          if (result === true) {
            res.render("home");
          } else {
            // Display a client-side alert
            res.send(
              "<script>alert('Incorrect password'); window.location='/login'</script>"
            );
          }
        });
      } else {
        // Display a client-side alert
        res.send(
          "<script>alert('User not found'); window.location='/login'</script>"
        );
      }
    })
    .catch(function (err) {
      console.log(err);
    });
});

// Start the Express server on port 3000
app.listen(3000);
