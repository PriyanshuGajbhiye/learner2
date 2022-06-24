//jshint esversion:6

const express = require("express");

const app = express();

app.get("/",function(req,res){
  //console.log(__dirname);             //to check what it gives
  res.sendFile(__dirname + "/index.html");    //for sending a complete file we have to give the absolute path not the relative path
});
//res.send just send a bits of individual html code

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
