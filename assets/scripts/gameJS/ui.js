'use strict'

const store = require('../store.js')

const showStats = function () {
  $('#display-stats').html(`This is game number ${store.game.id}`)
  $('#display-stats').css('color', 'green')
}

const failure = function () {
  $('#display-stats').text('Something happened')
}

module.exports = {
  showStats,
  failure
}
