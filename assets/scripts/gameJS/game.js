'use strict'

const store = require('../store.js')
const config = require('../config.js')
const api = require('./api.js')

// create a new game
// const onNewGame = function (event) {
//   return $.ajax({
//     url: config.apiUrl + `/games`,
//     method: 'POST',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }

const newGameSuccess = function (response) {
  store.game = response.game.id
}

const newGameFailure = function () {
  console.log('Something went wrong')
}

const onNewGame = function (event) {
  event.preventDefault()
  // console.log(data)
  api.newGame()
    .then(newGameSuccess)
    .catch(newGameFailure)
}

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

// variable for game gameOver

let gameOver = false

const checkForVictory = function () {
  // after a user.play being successful, invoke check for victory condition function
  // empty variable for game over state
  // victory is [0], [1], [3] having the same values
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== '') {
    $('.box').off()
    gameOver = true
  // victory is [4], [5], [6] having the same values
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== '') {
    $('.box').off()
    console.log('Row 2 victory')
    gameOver = true
  // victory is [7], [8], [9] having the same values
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== '') {
    $('.box').off()
    console.log('Row 3 victory')
    gameOver = true
  // victory is [0], [3], [6] having the same values
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== '') {
    $('.box').off()
    console.log('Column 1 victory')
    gameOver = true
  // victory is [1], [4], [7] having the same values
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[1] !== '') {
    $('.box').off()
    console.log('Column 2 victory')
    gameOver = true
  // victory is [2], [5], [8] having the same values
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== '') {
    $('.box').off()
    console.log('Column 3 victory')
    gameOver = true
  // victory is [0], [4], [8] having the same values
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== '') {
    $('.box').off()
    console.log('Diagonal l-r victory')
    gameOver = true
  // victory is [2], [4], [6] having the same values
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== '') {
    $('.box').off()
    console.log('Diagonal r-l victory')
    gameOver = true
  // else: user may play again
  } else if (playCount === 9 && gameOver === false) {
    $('.box').off()
    console.log('game ends in tie')
    gameOver = true
  } else {
    gameOver = false
  }
}

// create a play count variable...
let playCount = 0
//  that stores number of plays made

// create a currentLetter variable
let currentLetter = 'x'

// play counter that determines whether 'x' or 'o ' is played
const alternator = function () {
  // console.log('Player ' + currentLetter + ' turn')
  if (playCount % 2 === 0) {
    // user plays 'x'
    currentLetter = 'x'
    // console.log('Player X turn')
  } else {
  // user plays 'o'
    currentLetter = 'o'
    // console.log('Player O turn')
  } console.log('Player ' + currentLetter + ' turn')
}

console.log('Player ' + currentLetter + ' turn')

// alternator()
// console.log(currentLetter)

// FUNCTION: Assign numeric values to html boxes that will be associated with gameboard[i]
const playMade = function (event) {
  // const boxVal = ($(event.target).data('boxVal'))
  const boxVal = $(event.target).data('cell-index')
  console.log(boxVal)
  console.log(gameBoard)
  // check to see if the array index is already occupied
  if (gameBoard[boxVal] === '') {
  // if no, add x or o to gameBoard array at specific index
    gameBoard[boxVal] = currentLetter
    console.log(gameBoard)
    // also, add x or o to html element
    $(event.target).text(currentLetter)
    $(event.target).attr('data-cell-value', currentLetter)
    // invoke playCounter
    playCount++
    // invoke alternator function
    // store the move
    console.log('Play made')
    // check for victory
    checkForVictory()
    $(event.target).attr('data-over', `${gameOver}`)

    const onPlayMade = function (event) {
      return $.ajax({
        url: config.apiUrl + `/games/${store.game}`,
        method: 'PATCH',
        headers: {
          Authorization: `Token token=${store.user.token}`
        },
        data: {
          'game': {
            'cell': {
              'index': boxVal,
              'value': currentLetter
            },
            'over': gameOver
          }
        }
      })
    }
    onPlayMade()
    alternator()
  // if yes, tell user to make another play
  } else {
    console.log('already played')
  }
  console.log(gameBoard)
  console.log(currentLetter)
  console.log(playCount)
}
console.log(gameBoard)

// console.log(playCount)

// console.log(gameBoard)
// checkForVictory()
// alternator()
// console.log(currentLetter)

module.exports = {
  onNewGame,
  playMade
}
