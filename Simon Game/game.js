
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");        //to store the id of the button that got clicked.
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
});


function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

//playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
