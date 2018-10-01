'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./gameJS/game.js')
const user = require('./gameJS/user.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  // game event listeners,
  $('.box').on('click', gameEvents.playMade)

  // UI events
  $('.container').hide()
  $('#sign-up-form').hide()
  $('#sign-out-button').hide()
  $('#change-password-form').hide()
  $('#newGame-button').hide()
  $('#change-password-button').hide()
  $('#newGame-button').on('click', () => { $('.container').show() })
  $('#newGame-button').on('click', gameEvents.onNewGame)
  // $('.container').on('click', gameEvents.onNewGame)
  $('#stat-button').on('click', user.onViewStats)
})
