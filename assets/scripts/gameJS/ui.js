'use strict'

const store = require('../store.js')

const showStats = function () {
  $('#display-message').html(`This is game number ${store.game.id}`)
  $('#display-message').css('color', 'green')
}

const failure = function () {
  $('#display-stats').text('Something happened')
}

module.exports = {
  showStats,
  failure
}
