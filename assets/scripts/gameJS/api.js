'use strict'

const config = require('../config.js')
const store = require('../store.js')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const showStats = function () {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  newGame,
  showStats
}
