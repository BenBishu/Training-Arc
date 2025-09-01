//using a backend server to send matter to the mongodb database!

//we are seeign the working of databasese
// Particularly we are using MongoDB

const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://admin1:84BPPmdGGcc2xFgb@cluster0.xapwwyz.mongodb.net/UserData");

//for our body we use
app.use(express.json());

//creating my schema
const User = mongoose.model("users", {
  name: String,
  email: String,
  password: String,
});

//now putting our user into the user schema we just defined
//without this .save() nothing will work
app.post("/signin",async function (req, res) {
  
//the lines of codes below will take deconstruct the body and take out the matter from the body of the get request
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const user = new User({
    name: name,
    email: email,
    password: password,
  });
  //write code to check if the data alreadyy exists in the database
const checking = await User.findOne({ email: email });
if (checking){
  return res.status(400).send("user already exists")
}
await User.create({name ,email : username,password})
res.json({
  "msg" : "user has been successfully created !"
})

//Since this is not an inmemory database, then we have to use the function inside the mongoose lib that can help us search matter



app.listen("3000");