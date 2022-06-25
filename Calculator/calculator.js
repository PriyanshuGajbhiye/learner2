//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");      //By using bodyparser we are able to parse the HTTP req that we get from html form and by using urlencoded we can get access to the form data

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  //console.log(__dirname);                   //to check what it gives
  res.sendFile(__dirname + "/index.html");    //for sending a complete file we have to give the absolute path not the relative path
});
//res.send just send a bits of individual html code



app.post("/", function(req,res){

  var n1 = Number(req.body.num1);             //need to type cast coz the num1 and num2 we're getting back from bodyParser it gets parsed as text
  var n2 = Number(req.body.num2);
  var result = n1 + n2;

  res.send("The result of the calculation is " + result);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
