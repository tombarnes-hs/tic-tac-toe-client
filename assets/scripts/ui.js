'use strict'

const signUpSuccess = function () {
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
