//jshint esversion:6

const express = require("express");

const app = express();

/*
app.get("/", function(request,response){
  console.log(request);                 //print out response object when the callback gets triggered. There's still error in browser but in node can see lot of info thats packaged about the request we send to Server
});
*/

app.get("/", function(req,res){
  res.send("<h1>Hello</h1>");           //The browser will go to location specified and will make request to get some data back and when that request get made callback gets triggered and send the browser a response that renders on our screen.
});                            //instead of text u can send back HTML too "<h1>Hello</h1>" It ill render Hello as h1 text.

app.get("/contact", function(req,res){
  res.send("Contact me at g.priyanshu1212@gmail.com");
});

app.get("/about", function(req,res){
  res.send("I am priyanshu, a Front End Web Developer");
});

app.get("/hobbies",function(req,res){
  res.send("<ul><li>Code</li><li>Gaming</li><li>cricket</li></ul>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});                                             //This tells us to listen to a specific port (here 3000) for any http requests that get sent to our server
