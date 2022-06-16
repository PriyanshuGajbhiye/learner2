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

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function(){

      this.style.color = "white";     //this keyword is  used to figure out the identity, in this case identity of the button that triggered the EventListener i.e., button element
    });
}


/*var audio = new Audio("sounds/tom-1.mp3");      new Audio is a method for playing audio inside we gave the url and then varible.play()  play is a method 
audio.play();*/
