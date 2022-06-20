/*document.querySelector("button").addEventListener("click",handleclick);   Here we are calling the fn without the parentheses, means we giving the fn as an i/p and it get called only when click event happens. Passing event as i/p so that it can be called later*/
/*If we add () to the fn name here as soon as we open the website the fn triggers without even clicking, ie., our HTML doc will load up as soon as it hits script this script load up and it searches for button and triggers the fn without even clicking    */

/*Other way of passing fn as input is writing fn as anonymous fn i.e, wihout a name document.querySelector("button").addEventListener("click",function(){alert("I got clicked");})*/

/*
function handleclick(){
  alert("I got clicked");
}

// for adding EventListener to all buttons at once
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",handleclick);
}
*/

//Detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting keyboard press
//calling a fn with parameter event or e will give the event that triggered the function
document.addEventListener("keydown",function(event){

  makeSound(event.key);

  buttonAnimation(event.key);
});

//function makeSound defined for generating respective sound when a button gets clicked or key is pressed
function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); //new Audio is a method for playing audio inside we gave the url and then varible.play()  play is a method
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      consolg.log(buttonInnerHTML);
  }
}

//function buttonAnimation defined for adding animation to the button when it gets clicked or pressed
function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);    //selecting a class based on the key clicked or pressed

  activeButton.classList.add("pressed");                          //add class pressed which has styles applied to it

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);                                                    //This timeout method remove the pressed class acc to the function described after 0.1s
}
