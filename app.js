const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const reactViews = require("express-react-views");

const app = express();

// Set JSX as the view engine
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/organicDB");

// Specify the views directory
app.set("views", path.join(__dirname, "views"));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// GET REQUETS
app.get("/", (req, res) => {
  res.render("login");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

// POST REQUESTS
app.post("/signup", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  newUser
    .save()
    .then(function () {
      res.render("home");
    })
    .catch(function (err) {
      console.log(err);
      res.status(500).send("An error occurred while registering.");
    });
});

app.listen(3000);
