'use strict'

const game = require('./game')
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const getStats = function () {
  event.preventDefault()
  const playerId = store.user.id
  api.show(playerId)
    .then(ui.statsSuccess)
    .catch(ui.statsFailure)
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .then(game.onReplay)
    .then($('#result').text('WELCOME TO THE GAME GRID'))
    .catch(ui.signOutFailure)
}

const onPasswordChange = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.passwordChange(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onGameStart = function (event) {
  event.preventDefault()
  $('.col-xs-4').unbind('click')
  game.onReplay(event)
  api.postGame()
    .then(ui.postGameSuccess)
    .catch(ui.postGameFailure)
  $('#start-game').hide()
  $('#replayGame').show()
  $('#ai-game').show()
  $('#replayAiGame').hide()
  getStats()
  game.pOneSymbol()
  $('#result').text('GAME GRID INITIALIZED')
}

const onReplayStart = function (event) {
  game.onReplay(event)
  getStats()
  event.preventDefault()
  api.postGame()
    .then(ui.postGameSuccess)
    .catch(ui.postGameFailure)
  getStats()
}

const onAiGameStart = function (event) {
  event.preventDefault()
  $('.col-xs-4').unbind('click')
  game.onAiReplay(event)
  api.postGame()
    .then(ui.postGameSuccess)
    .catch(ui.postGameFailure)
  $('#ai-game').hide()
  $('#replayAiGame').show()
  $('#start-game').show()
  $('#replayGame').hide()
  getStats()
  game.pOneSymbol()
  $('#result').text('MASTER CONTROL LOADED')
}

const onAiReplayStart = function (event) {
  game.onAiReplay(event)
  getStats()
  event.preventDefault()
  api.postGame()
    .then(ui.postGameSuccess)
    .catch(ui.postGameFailure)
  getStats()
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onPasswordChange)
  $('#replayGame').on('click', onReplayStart)
  $('#start-game').on('submit', onGameStart)
  $('#ai-game').on('click', onAiGameStart)
  $('#replayAiGame').on('click', onAiReplayStart)
}

module.exports = {
  addHandlers,
  onSignUp,
  onSignIn,
  onSignOut,
  onPasswordChange,
  onGameStart,
  onReplayStart,
  getStats,
  onAiGameStart,
  onAiReplayStart
}
