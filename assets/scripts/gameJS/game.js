'use strict'

const store = require('../store.js')

// create a current player
//  can use data from store.js the same way we did with tokens after login?

const currentPlayer = store.user.email

// gameboard starts as an array of empty strings
const gameboard = ['', '', '', '', '', '', '', '', '']

// empty strings will become x or o values by user behavior?
gameboard[0] = 'x'

// before each turn, invoke check for victory condition function

  // victory is [0], [1], [3] having the same values

  // victory is [4], [5], [6] having the same values

  // victory is [7], [8], [9] having the same values

  // victory is [0], [3], [6] having the same values

  // victory is [1], [4], [7] having the same values

  // victory is [2], [5], [8] having the same values

  // victory is [0], [4], [8] having the same values

  // victory is [2], [4], [6] having the same values

  // if all spaces filled and no victory condition: tie

  // else: user may play


// user behavior
const fillGameboard = function (move) {
  // loop through the gameboard to find if a space is occupied
  for (let i = 0; i < gameboard.length; i++) {
    // if spot is occupied, cannot add a new value
    if (gameboard[i]) {
      alert('Space already selected, choose another')
    } else {

    }
  }
}

console.log(gameboard[0])

// module.exports = {
//   currentPlayer
// }
