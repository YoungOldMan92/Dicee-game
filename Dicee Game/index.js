function randomDice(){
  var dicePlayer1 = Math.floor((Math.random() * 6) + 1);
  var dicePlayer2 = Math.floor((Math.random() * 6) + 1);

  var newImgPlayer1 = "images/dice" + dicePlayer1 + ".png";
  var newImgPlayer2 = "images/dice" + dicePlayer2 + ".png";

  document.getElementById("player1").src = newImgPlayer1;
  document.getElementById("player2").src = newImgPlayer2;

  if(dicePlayer1 > dicePlayer2){
    document.querySelector("h1").innerHTML = "Player 1 wins! 🚩";
  }else if(dicePlayer1 < dicePlayer2){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"
  }else{
    document.querySelector("h1").innerHTML = "Draw!";
  }

}
