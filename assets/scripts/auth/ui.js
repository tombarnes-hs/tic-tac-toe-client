'use strict'

const store = require('../store.js')

// Messages for user indicating success of failure during auth processes
const signUpSuccess = function () {
  // fill empty html with text and style
  $('#display-message').html('Sign up successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  // fill empty html with text and style
  $('#display-message').html('Sign in successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  store.user = response.user
}

const signOutSuccess = function () {
  // fill empty html with text and style
  $('#display-message').html('Sign out successful')
  $('#display-message').css('color', 'green')
  $('#sign-out-botton').trigger('reset')
}

const failure = function () {
  $('#display-message').html('Something went wrong')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  failure
}
