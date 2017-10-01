'use strict'

const store = require('./store')

const overlayOff = function off () {
  document.getElementById('overlayId').style.display = 'none'
}

const overlayOn = function on () {
  document.getElementById('overlayId').style.display = 'block'
}

const signUpSuccess = function (data) {
  $('#signUpModal').modal('hide')
  $('#signUpModalLabel').text('PROFILE CREATION')
  $('#signUpModalLabel').css('color', 'black')
  $('#overlayAlert').text('USER PROFILE CREATED - ACCESS PROFILE BELOW')
  $('#signInModalLabel').text('ACCESS PROFILE')
  $('#signInModalLabel').css('color', 'black')
}

const signUpFailure = function () {
  $('#signUpModalLabel').css('color', 'red')
  $('#signUpModalLabel').text('CREATION FAILED')
  $('#signInModalLabel').text('ACCESS PROFILE')
  $('#signInModalLabel').css('color', 'black')
}

const signInSuccess = function (data) {
  $('.col-xs-4').off()
  $('#start-game').show()
  $('#signInModal').modal('hide')
  $('#activeSymbolId').empty()
  $('#signInModalLabel').text('ACCESS PROFILE')
  $('#signInModalLabel').css('color', 'black')
  $('#result').text('WELCOME TO THE GAME GRID')
  store.user = data.user
  overlayOff()
}

const signInFailure = function () {
  $('#signInModalLabel').css('color', 'red')
  $('#signInModalLabel').text('ACCESS FAILED')
}

const signOutSuccess = function () {
  $('#gamesCompleteId').empty()
  $('.col-xs-4').off()
  $('#start-game').show()
  store.user = null
  overlayOn()
}

const signOutFailure = function () {
  $('#result').text('SIGN OUT FAILURE - YOU WILL NEVER LEAVE')
}

const changePasswordSuccess = function (data) {
  $('#changePasswordModal').modal('hide')
  $('#result').text('PASSWORD CHANGE SUCCESS')
  $('#exampleModalLabel').text('CHANGE PASSWORD')
  $('#exampleModalLabel').css('color', 'black')
}

const changePasswordFailure = function () {
  $('#result').text('PASSWORD CHANGE FAILURE')
  $('#exampleModalLabel').css('color', 'red')
  $('#exampleModalLabel').text('CHANGE FAILURE')
}

const postGameSuccess = function (data) {
  store.game = data.game
}

const postGameFailure = function () {
}

const patchGameSuccess = function (data) {
}

const patchGameFailure = function () {
}

const statsSuccess = function (data) {
  let count = 0
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].over === true) {
      count += 1
    }
  }
  $('#gamesCompleteId').text(count)
  count = 0
}

const statsFailure = function () {
  $('#gamesCompleteId').text('ERROR')
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
