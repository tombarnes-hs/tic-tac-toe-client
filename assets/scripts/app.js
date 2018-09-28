'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./gameJS/game.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  // game event listeners
  $('.box').on('click', gameEvents.playMade)
  // $('#box2').on('click', gameEvents.playMade)
  // $('#box3').on('click', gameEvents.playMade)
  // $('#box4').on('click', gameEvents.playMade)
  // $('#box5').on('click', gameEvents.playMade)
  // $('#box6').on('click', gameEvents.playMade)
  // $('#box7').on('click', gameEvents.playMade)
  // $('#box8').on('click', gameEvents.playMade)
  // $('#box9').on('click', gameEvents.playMade)
})
