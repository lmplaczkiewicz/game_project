'use strict'

// clear form fields and reset overlay header on sign in.

const store = require('./store')

const overlayOff = function off () {
  document.getElementById('overlayId').style.display = 'none'
}

const overlayOn = function on () {
  document.getElementById('overlayId').style.display = 'block'
}

const signUpSuccess = function (data) {
  $('#signUpModal').modal('hide')
  $('#sign-up')[0].reset()
  $('#signUpModalLabel').text('PROFILE CREATION')
  $('#signUpModalLabel').css('color', 'black')
  $('#overlayAlert').text('USER PROFILE CREATED - ACCESS PROFILE BELOW')
  $('#signInModalLabel').text('ACCESS PROFILE')
  $('#signInModalLabel').css('color', 'black')
  $('#gamesCompleteId').text('')
}

const signUpFailure = function () {
  $('#signUpModalLabel').css('color', 'red')
  $('#signUpModalLabel').text('CREATION FAILED')
  $('#signInModalLabel').text('ACCESS PROFILE')
  $('#signInModalLabel').css('color', 'black')
  $('#sign-up')[0].reset()
}

const signInSuccess = function (data) {
  $('.col-xs-4').off()
  $('#start-game').show()
  $('#signInModal').modal('hide')
  $('#sign-in')[0].reset()
  $('#activeSymbolId').empty()
  $('#signInModalLabel').text('ACCESS PROFILE')
  $('#signInModalLabel').css('color', 'black')
  $('#result').text('WELCOME TO THE GAME GRID')
  $('#overlayAlert').text('GREETINGS USER')
  store.user = data.user
  overlayOff()
}

const signInFailure = function () {
  $('#signInModalLabel').css('color', 'red')
  $('#signInModalLabel').text('ACCESS FAILED')
  $('#sign-in')[0].reset()
}

const signOutSuccess = function () {
  $('#gamesCompleteId').empty()
  $('.col-xs-4').off()
  $('#start-game').show()
  $('#replayGame').hide()
  $('#ai-game').show()
  $('#replayAiGame').hide()
  store.user = null
  overlayOn()
}

const signOutFailure = function () {
  $('#result').text('SIGN OUT FAILURE')
}

const changePasswordSuccess = function (data) {
  $('#changePasswordModal').modal('hide')
  $('#change-password')[0].reset()
  $('#result').text('PASSWORD CHANGE SUCCESS')
  $('#exampleModalLabel').text('CHANGE PASSWORD')
  $('#exampleModalLabel').css('color', 'black')
}

const changePasswordFailure = function () {
  $('#result').text('PASSWORD CHANGE FAILURE')
  $('#change-password')[0].reset()
  $('#exampleModalLabel').css('color', 'red')
  $('#exampleModalLabel').text('CHANGE FAILURE')
}

const postGameSuccess = function (data) {
  store.game = data.game
}

const postGameFailure = function () {
  $('#result').text('Server connection issues')
}

const patchGameSuccess = function () {
}

const patchGameFailure = function () {
  $('#result').text('Server connection issues')
}

const statsSuccess = function (data) {
  let count = 0
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].over === true) {
      count += 1
    }
  }
  $('#gamesCompleteId').text(count)
  if (count >= 100) {
    $('#gamesCompleteId').css('font-size', '72px')
  }
  count = 0
}

const statsFailure = function () {
  $('#gamesCompleteId').text('Error')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  postGameSuccess,
  postGameFailure,
  patchGameSuccess,
  patchGameFailure,
  statsSuccess,
  statsFailure,
  overlayOn
}
