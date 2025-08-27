// in this assignment we make a website with 2 endpoints ,
// 1. We make a post request to login
// 2. We make a get request which displays all users incase someone enters the right password.

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];
app.use(express.json());

function userExists(username, password) {
  const matchingUsers = ALL_USERS.filter(function (person) {
    return person.username === username && person.password === password;
  });
  return matchingUsers.length > 0;
}
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "123456");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, jwtPassword);
  const username = decoded.username;
  res.json({
    users: ALL_USERS,
  });
});

app.listen(3000, console.log("the server is up and running "));
