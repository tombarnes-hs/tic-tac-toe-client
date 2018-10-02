'use strict'

const store = require('../store.js')

// Messages for user indicating success of failure during auth processes
const signUpSuccess = function () {
  // fill empty html with text and style
  $('#display-message').html('Sign up successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
}

const signInSuccess = function (response) {
  // fill empty html with text and style
  $('#display-message').html('Sign in successful! Click New Game to Begin')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-in-form').hide()
  $('#change-password-form').show()
  $('#newGame-button').show()
  $('#sign-out-button').show()
}

const signOutSuccess = function () {
  // fill empty html with text and style
  $('#display-message').html('Sign out successful. Sign in to play again.')
  $('#display-message').css('color', 'green')
  $('#sign-out-button').trigger('reset')
  $('#sign-in-form').show()
  $('#sign-out-button').hide()
  $('#change-password-form').hide()
  $('#newGame-button').hide()
  $('.container').hide()
  $('#stat-button').hide()
}

const changePasswordSuccess = function () {
  // fill empty html with text and style
  $('#display-message').html('Password change successful. Sign in with new password to play.')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
  $('#change-password-form').hide()
  $('#newGame-button').hide()
  $('#sign-out-button').hide()
  $('.container').hide()
  $('#sign-in-form').show()
}

const failure = function () {
  $('#display-message').html('Something went wrong')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

// Messages for user during game play

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  failure
}
