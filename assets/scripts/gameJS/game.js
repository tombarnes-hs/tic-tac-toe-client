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

// gameboard starts as an array of empty strings and will be updated by user.play
const gameboard = [
  '', '', '',
  '', '', '',
  '', '', '']
// function to add x's or o's based on user.play to the game array

// need to specify how a click in a certain html element relates to a certain indices

// create a play count variable...
let playCount = 0
//  that stores number of plays made
const playCounter = function () {
  if (playCount % 2 === 0) {
    //user plays 'x'

      //user plays 'o'
    }
    playCount++
  }
}

const checkForVictory = function () {
  // after a user.play being successful, invoke check for victory condition function
  // victory is [0], [1], [3] having the same values
  if (gameboard[0] === gameboard[1] && gameboard[1] === gameboard[2] && gameboard[0] !== '') {
    console.log('Row 1 victory')
  // victory is [4], [5], [6] having the same values
  } else if (gameboard[3] === gameboard[4] && gameboard[4] === gameboard[5] && gameboard[3] !== '') {
    console.log('Row 2 victory')
  // victory is [7], [8], [9] having the same values
  } else if (gameboard[6] === gameboard[7] && gameboard[7] === gameboard[8] && gameboard[6] !== '') {
    console.log('Row 3 victory')
  // victory is [0], [3], [6] having the same values
  } else if (gameboard[0] === gameboard[3] && gameboard[3] === gameboard[6] && gameboard[0] !== '') {
    console.log('Column 1 victory')
  // victory is [1], [4], [7] having the same values
  } else if (gameboard[1] === gameboard[4] && gameboard[4] === gameboard[5] && gameboard[1] !== '') {
    console.log('Column 2 victory')
  // victory is [2], [5], [8] having the same values
  } else if (gameboard[2] === gameboard[5] && gameboard[5] === gameboard[8] && gameboard[2] !== '') {
    console.log('Column 3 victory')
  // victory is [0], [4], [8] having the same values
  } else if (gameboard[0] === gameboard[4] && gameboard[4] === gameboard[8] && gameboard[0] !== '') {
    console.log('Diagonal l-r victory')
  // victory is [2], [4], [6] having the same values
  } else if (gameboard[2] === gameboard[4] && gameboard[4] === gameboard[6] && gameboard[2] !== '') {
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

console.log(gameboard)
checkForVictory()

// module.exports = {
//   currentPlayer
// }
