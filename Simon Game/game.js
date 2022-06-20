var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var n = Math.random();
  n = n * 4;
  var randomNumber = Math.floor(n);
  return randomNumber;
}

var randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).click(function() {
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
});

document.querySelector("#" + randomChosenColour).function() {
  switch ("#" + randomChosenColour) {
    case "#green":
      var green = new Audio('sounds/green.mp3');
      green.play();
      break;
    case "#red":
      var red = new Audio('sounds/red.mp3');
      red.play();
      break;
    case "#yellow":
      var yellow = new Audio('sounds/yellow.mp3');
      yellow.play();
      break;
    case "#blue":
      var blue = new Audio('sounds/blue.mp3');
      blue.play();
      break;

  }
}
