'use strict'

const store = require('../store.js')
const config = require('../config.js')
const api = require('./api.js')

// variable for game gameOver
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
  $('.box').text('')
  $('.box').removeAttr('data-cell-value data-over')
  $('#stat-button').show()
  $('#display-message').text(`New game started! Player x's turn`)
  $('#display-stats').text('')
}

const newGameFailure = function () {
  $('#display-message').text(`Something went wrong. Try again`)
}

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(newGameSuccess)
    .catch(newGameFailure)
}

const checkForVictory = function () {
  // after a user.play being successful, invoke check for victory condition function
  // empty variable for game over state
  // victory is [0], [1], [3] having the same values
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2] && store.game.cells[0] !== '') {
    $('#display-message').text(`Row 1 victory for player ${currentLetter}`)
    gameOver = true
  // victory is [4], [5], [6] having the same values
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[3] !== '') {
    $('#display-message').text(`Row 2 victory for player ${currentLetter}`)
    gameOver = true
  // victory is [7], [8], [9] having the same values
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[6] !== '') {
    $('#display-message').text(`Row 3 victory for player ${currentLetter}`)
    gameOver = true
  // victory is [0], [3], [6] having the same values
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[0] !== '') {
    $('#display-message').text(`Column 1 victory for player ${currentLetter}`)
    gameOver = true
  // victory is [1], [4], [7] having the same values
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[4] !== '') {
    $('#display-message').text(`Column 2 victory for player ${currentLetter}`)
    gameOver = true
  // victory is [2], [5], [8] having the same values
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[2] !== '') {
    $('#display-message').text(`Column 3 victory for player ${currentLetter}`)
    gameOver = true
  // victory is [0], [4], [8] having the same values
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[0] !== '') {
    $('#display-message').text(`Diagonal victory for player ${currentLetter}`)
    gameOver = true
  // victory is [2], [4], [6] having the same values
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[2] !== '') {
    $('#display-message').text(`Diagonal victory for player ${currentLetter}`)
    gameOver = true
  // else: user may play again
  } else if (playCount === 9 && gameOver === false) {
    $('#display-message').text(`Game ends in a tie`)
    gameOver = true
  } else {
    gameOver = false
  }
}

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

// FUNCTION: Assign numeric values to html boxes that will be associated with gameboard[i]
const playMade = function (event) {
  const boxVal = $(event.target).data('cell-index')
  // check to see if the array index is already occupied
  if ($(event.target).text() === '' && gameOver === false) {
  // if no, add x or o to gameBoard array at specific index
    store.game.cells[boxVal] = currentLetter
    // also, add x or o to html element
    $(event.target).text(currentLetter)
    $(event.target).attr('data-cell-value', currentLetter)
    // invoke playCounter
    playCount++
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
    if (gameOver === false) {
      $('#display-message').text(`Player ${currentLetter}'s turn`)
    }
  // if yes, tell user to make another play
  } else {
    $('#display-message').text(`You've already played here. Player ${currentLetter} play again`)
  }
}

module.exports = {
  onNewGame,
  playMade
}
