//for getting a random number b/w 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

/*based on the random number changing the image from default dice6 to dice(randomNumber). First i was using if else cond for all diff numbers but
with string concatenation it's easy*/
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");


//for getting a random number b/w 1 to 6, can't use randomNumber1 as both will get same
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//based on the random number changing the image from default dice6 to dice(randomNumber), just for more knowledge tried diff method
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");


if(randomNumber1>randomNumber2)
  document.querySelector("h1").innerHTML="🚩Player 1 wins!";
else if(randomNumber2>randomNumber1)
  document.querySelector("h1").innerHTML="Player 2 wins!🚩";
else
  document.querySelector("h1").innerHTML="Draw!";
