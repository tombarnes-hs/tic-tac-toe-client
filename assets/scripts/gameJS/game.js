'use strict'

const store = require('../store.js')

// create a current player
//  can use data from store.js the same way we did with tokens after login?

// const currentPlayer = {
//   userName: store.user.email,
//   play: function () {
// jquery for html element representing a piece of the grid being clicked

// on click, check to see if the element has already been selected

// if not, log an 'x' or 'o' value in the location of the selected element

// if yes, send an alert to pick a different box
//   }
// }

// gameBoard starts as an array of empty strings and will be updated by user.play
const gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]

// create a play count variable...
let playCount = 0
//  that stores number of plays made

// create a currentLetter variable
let currentLetter

// play counter that determines whether 'x' or 'o ' is played
const alternator = function () {
  if (playCount % 2 === 0) {
    // user plays 'x'
    currentLetter = 'x'
  } else {
  // user plays 'o'
    currentLetter = 'o'
  }
}

alternator()
console.log(currentLetter)

// FUNCTION: Assign numeric values to html boxes that will be associated with gameboard[i]

// FUNCTION: Assign 'x' or 'o' to gameboard

// EVENT: if a user clicks a box and that box is empty:
// add X or O to html element
// invoke function that assigns 'x' or 'o' to gameboard array
// invoke playCounter
// invoke checkForVictory function

// function that changes the value of specific array index
const playMade = function () {
  gameBoard[0] = currentLetter
  playCount++
  alternator()
  gameBoard[1] = currentLetter
  playCount++
  alternator()
}
playMade()

console.log(playCount)
const checkForVictory = function () {
  // after a user.play being successful, invoke check for victory condition function
  // victory is [0], [1], [3] having the same values
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== '') {
    console.log('Row 1 victory')
  // victory is [4], [5], [6] having the same values
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== '') {
    console.log('Row 2 victory')
  // victory is [7], [8], [9] having the same values
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== '') {
    console.log('Row 3 victory')
  // victory is [0], [3], [6] having the same values
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== '') {
    console.log('Column 1 victory')
  // victory is [1], [4], [7] having the same values
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[1] !== '') {
    console.log('Column 2 victory')
  // victory is [2], [5], [8] having the same values
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== '') {
    console.log('Column 3 victory')
  // victory is [0], [4], [8] having the same values
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== '') {
    console.log('Diagonal l-r victory')
  // victory is [2], [4], [6] having the same values
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== '') {
    console.log('Diagonal r-l victory')
  // else: user may play again
  } else {
    if (playCount === 9) {
      console.log('game ends in tie')
    } else {
      console.log('User plays again')
    }
  }
}

console.log(gameBoard)
checkForVictory()
// alternator()
console.log(currentLetter)

// module.exports = {
//   currentPlayer
// }
