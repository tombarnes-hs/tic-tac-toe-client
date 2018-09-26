'use strict'

// Messages for user indicating success of failure during auth processes
const signUpSuccess = function () {
  // fill empty html with text and styile
  $('#display-message').html('Sign up successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const failure = function () {
  $('#display-message').html('Something went wrong')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  failure
}
