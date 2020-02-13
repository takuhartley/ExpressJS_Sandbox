const express = require("express");
const app = express();
// const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://user:user@cluster0-m1sak.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => console.log("Connected to DB fam!")
);

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/quotes", (req, res) => {
  console.log(req.body);
});

app.listen(3000, function() {
  console.log("listening on 3000");
});
