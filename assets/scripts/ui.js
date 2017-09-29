'use strict'

const store = require('./store')

const overlayOff = function off () {
  document.getElementById('overlayId').style.display = 'none'
}

const overlayOn = function on () {
  document.getElementById('overlayId').style.display = 'block'
}

const signUpSuccess = function (data) {
  console.log('this is singUp data', data)
  $('#signUpModal').modal('hide')
}

const signUpFailure = function (error) {
  console.error(error)
}

const signInSuccess = function (data) {
  console.log(data)
  $('.col-xs-4').off()
  $('#start-game').show()
  $('#signInModal').modal('hide')
  store.user = data.user
  overlayOff()

  console.log('This is data.user ', data.user)
  console.log('This is store.user ', store.user)
}

const signInFailure = function (error) {
  console.log(error)
}

const signOutSuccess = function (data) {
  console.log('Success logged out')
  $('.col-xs-4').off()
  $('#start-game').show()
  store.user = null
  overlayOn()
}

const signOutFailure = function (error) {
  console.log(error)
}

const changePasswordSuccess = function (data) {
  console.log('Success')
  $('#changePasswordModal').modal('hide')
}

const changePasswordFailure = function (error) {
  console.log(error)
}

const postGameSuccess = function (data) {
  console.log(data)
  console.log('postGame Success ui')
  store.game = data.game
}

const postGameFailure = function (error) {
  console.log(error)
  console.log('postGame failure ui')
}

const patchGameSuccess = function (data) {
  console.log(data)
  console.log('patchGame Success ui')
}

const patchGameFailure = function (error) {
  console.log(error)
  console.log('patchGame failure ui')
}

const statsSuccess = function (data) {
  let count = 0
  console.log('this is statsSuccess')
  console.log(data)
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].over === true) {
      count += 1
    }
  }
  console.log(count)
  count = 0
}

const statsFailure = function (error) {
  console.log(error)
  console.log('this is statsFailure')
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
