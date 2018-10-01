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
let gameOver = false

// create a play count variable...
let playCount = 0

// create a currentLetter variable
let currentLetter = 'x'

const newGameSuccess = function (response) {
  store.game = response.game
  gameOver = false
  playCount = 0
  currentLetter = 'x'
  console.log(response.game)
}

const newGameFailure = function () {
  console.log('Something went wrong')
}

const onNewGame = function (event) {
  event.preventDefault()
  // console.log(data)
  $('.box').text('')
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
// const gameBoard = [
//   '', '', '',
//   '', '', '',
//   '', '', ''
// ]

// variable for game gameOver

// let gameOver = false

const checkForVictory = function () {
  // after a user.play being successful, invoke check for victory condition function
  // empty variable for game over state
  // victory is [0], [1], [3] having the same values
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2] && store.game.cells[0] !== '') {
    $('.box').off()
    gameOver = true
  // victory is [4], [5], [6] having the same values
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[3] !== '') {
    $('.box').off()
    console.log('Row 2 victory')
    gameOver = true
  // victory is [7], [8], [9] having the same values
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[6] !== '') {
    $('.box').off()
    console.log('Row 3 victory')
    gameOver = true
  // victory is [0], [3], [6] having the same values
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[0] !== '') {
    $('.box').off()
    console.log('Column 1 victory')
    gameOver = true
  // victory is [1], [4], [7] having the same values
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[4] !== '') {
    $('.box').off()
    console.log('Column 2 victory')
    gameOver = true
  // victory is [2], [5], [8] having the same values
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[2] !== '') {
    $('.box').off()
    console.log('Column 3 victory')
    gameOver = true
  // victory is [0], [4], [8] having the same values
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[0] !== '') {
    $('.box').off()
    console.log('Diagonal l-r victory')
    gameOver = true
  // victory is [2], [4], [6] having the same values
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[2] !== '') {
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
// let playCount = 0
//  that stores number of plays made

// create a currentLetter variable
// let currentLetter = 'x'

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
  console.log(store.game.cells)
  // check to see if the array index is already occupied
  if (store.game.cells[boxVal] === '') {
  // if no, add x or o to gameBoard array at specific index
    store.game.cells[boxVal] = currentLetter
    console.log(store.game.cells)
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
        url: config.apiUrl + `/games/${store.game.id}`,
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
  console.log(store.game.cells)
  console.log(currentLetter)
  console.log(playCount)
}
// console.log(store.game.cells)

// console.log(playCount)

// console.log(gameBoard)
// checkForVictory()
// alternator()
// console.log(currentLetter)

module.exports = {
  onNewGame,
  playMade
}
