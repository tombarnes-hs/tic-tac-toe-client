'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onViewStats = function () {
  event.preventDefault()
  api.showStats()
    .then(ui.showStats)
    .catch(ui.failure)
}

module.exports = {
  onViewStats
}
