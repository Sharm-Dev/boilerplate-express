const express = require("express");
const app = express();
let absolutePath = __dirname + "/views/index.html";

/*
app.use gives access to files in the public folder as declared  below
*/
app.use("/public", express.static(__dirname + "/public"));

/*
Made a get request to the html file and also imported the html file into this file with a variable at the top of page 
*/
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

/*
Creates a json file and sends it to the browser
*/
app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
});

module.exports = app;
