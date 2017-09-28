'use strict'

const game = require('./game')
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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
  console.log('Made it to onGameStart in events')
  event.preventDefault()
  game.addHandlers()
  api.postGame()
    .then(ui.postGameSuccess)
    .catch(ui.postGameFailure)
  $('#start-game').hide()
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onPasswordChange)
  $('#replayGame').on('click', game.onReplay)
  $('#start-game').one('submit', onGameStart)
}

module.exports = {
  addHandlers,
  onSignUp,
  onSignIn,
  onSignOut,
  onPasswordChange,
  onGameStart
}
