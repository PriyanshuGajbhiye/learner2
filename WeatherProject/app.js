//jshint esversion: 6

const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req,res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=831095b7375d110ba507ef1c8736feab&units=metric";
  https.get(url, function(response){
    console.log(response);
  });
  res.send("Server is up and running");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
