var colorButton = document.querySelector('#colorButton')
colorButton.addEventListener('click', changeColor)

function changeColor() {
  var x = randomNumber()
  var y = randomNumber()
  var z = randomNumber()
  var colorCode = "rgb(" + x + "," + y + "," + z + ")"
  document.body.style.backgroundColor = colorCode
}

function randomNumber() {
  return Math.floor(Math.random() * 256)
}

// body.style.backgroundColor = [insert the random color here]

// var btn = document.getElementById('gameButton')
// var userGuess = document.getElementById('guessingBox').value
//
// btn.addEventListener('click', higherOrLower(userGuess, 100))
// // WHY IS THE FUNCTION higherOrLower RUNNING EVEN BEFORE I CAN CLICK???
// // function that checks guessed number with the random number
// function higherOrLower (guessedNumber, randomNumber) {
//   console.log('guessedNumber is ', guessedNumber)
//   console.log('randomNumber is ', randomNumber)
//   if (guessedNumber > randomNumber) {
//     updateP('lower, random number is ', randomNumber)
//     repeatGuess(randomNumber)
//   } else if (guessedNumber < randomNumber) {
//     updateP('higher, random number is ', randomNumber)
//     repeatGuess(randomNumber)
//   } else {
//     updateP('correct, random number is ' + randomNumber)
//   }
// }
// // This function [repeats higherorlower until correct is reached]
// function repeatGuess (answer) {
//   var newGuess = prompt('Give me another number') // REMEMBER prompt returns a string, not an integer. So have to run parseInt on this variable first
//   higherOrLower(newGuess, answer)
// }
//
// // this function updates p
// function updateP (newP) {
//   var p = document.querySelector('p')
//   /* var h1 = document.getElementsByTagName("h1") // this is the
//   alternative to querySelector. looks more familiar to me */
//   p.textContent = newP
// }
// /* you can figure out the methods available to any document element by
// typing this into the Inspect terminal:
// var h1 = document.querySelector("h1")
// h1. [once you enter this, a box will pop up showing you all the methods
// available to h1] */
