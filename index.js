// this is the new index.js file where we have some javascirpt code
const express = require("express");
const app = express();

//calculateing the time taken for a request to handle it !

//in this we will count the number of requests
let requests = 0;

let todo = [
  {
    name: "bishwa",
    roll: 01,
  },
  { name: "Sachin", roll: 02 },
];

app.use(express.json());

app.get("/", function (req, res) {
  requests++;
  res.json({
    data: todo,
    msg: requests,
  });
});

app.post("/", function (req, res) {
  requests++;
  const newInfo = req.body;
  todo.push(newInfo);
});

app.listen("3000", console.log("the server is running !"));
