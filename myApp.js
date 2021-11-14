const express = require("express");
const app = express();
let absolutePath = __dirname + "/views/index.html";

//console logging a string
// console.log('Hello World');

/*
Use the app.get() method to serve the string "Hello Express" to GET requests matching the / (root) path.
  
app.get("/", (req, res) => {
    res.send("Hello Express");
});  
*/

/*
Made a get request to the html file and also imported the html file into this file with a variable at the top of page 
*/
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

module.exports = app;
