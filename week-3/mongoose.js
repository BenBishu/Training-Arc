//we are seeign the working of databasese
// Particularly we are using MongoDB
const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect(
  "mongodb+srv://admin1:84BPPmdGGcc2xFgb@cluster0.xapwwyz.mongodb.net/UserData"
);
app.use(express());
//creating my schema
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

//now putting our user into the user schema we just defined

//without this .save() nothing will work
app.get("/signin", function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const user = new User({
    name: name,
    email: email,
    password: password,
  });

  //write code to check if the data alreadyy exists in the database
  const checking = await findOne({name: }){}
  user.save(console.log("the matter has been added to the database !"));
});


app.listen("3000")