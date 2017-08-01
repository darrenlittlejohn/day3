var userGuess = prompt("Guess a number between 1 and 100");
// var guessHigh = prompt("Bro you're high, guess again.");
// var guessLow  = prompt("Too low bro, guess again.");
var secretNumber = ourRandom();
console.log(secretNumber);

function ourRandom() {
  return Math.floor(Math.random() * 100) ;
}

//     if (userGuess < ourRandom()) {
//         alert("Correct");
//         if (userGuess == ourRandom()) {
//             alert("Correct");

function guessAgain() {
    if (userGuess < secretNumber) {

    userGuess = prompt("Too low bro, guess again.");
      console.log(secretNumber, userGuess);
      return;
  } else if (userGuess > secretNumber) {

    userGuess = prompt("Bro you're high, guess again");
      console.log(secretNumber, userGuess);
      return;
  } else if (userGuess == secretNumber)
    alert("Correct, Bro.");
      console.log(userGuess);
      return;
  }
}

if (userGuess == secretNumber) {
    alert("Correct");
// } else if (userGuess < secretNumber){
//  guessAgain()
// } else if (userGuess > secretNumber){
//  guessAgain()
} while (userGuess < secretNumber) {
  guessAgain();
} while (userGuess > secretNumber) {
  guessAgain();
}
