'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onViewStats = function () {
  event.preventDefault()
  api.showStats()
    .then(ui.showStats)
    .catch(ui.failure)
}

const gameReset = function () {
  $('#newGame-button').on('click', function () {
    $('.container').detach()
  })
}

module.exports = {
  onViewStats,
  gameReset
}
