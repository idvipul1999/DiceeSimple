var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png" ; //dice1.png-dice6.png
var randomImageSource = "images/" + randomDiceImage ; //images/1 to images/6.png

var image1 = document.querySelectorAll("img")[0] ;//1st img attr
image1.setAttribute("src", randomImageSource);

// for dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber2 + ".png" ; //dice1.png-dice6.png
var randomImageSource = "images/" + randomDiceImage ; //images/1 to images/6.png

var image2 = document.querySelectorAll("img")[1] ;//2nd dice img attr
image2.setAttribute("src", randomImageSource);
//document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);
var player1 = prompt("Enter the Name of Player 1");
var player2 = prompt("Enter the Name of Player 2");
//winning conditions 
document.querySelectorAll("p")[0].innerHTML = player1;
document.querySelectorAll("p")[1].innerHTML = player2;
startgame();
function startgame(){
   if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = player1 + " wins!"; 
    }
    else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = player2 + " wins!";
    }   
    else {
    document.querySelector("h1").innerHTML = "Draw";
    }
}