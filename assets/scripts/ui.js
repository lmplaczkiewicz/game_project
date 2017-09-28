'use strict'

const store = require('./store')
const api = require('./api')

const signUpSuccess = function (data) {
  console.log(data)
}

const signUpFailure = function (error) {
  console.error(error)
}

const signInSuccess = function (data) {
  console.log(data)
  store.user = data.user
  console.log('This is data.user ', data.user)
  console.log('This is store.user ', store.user)
}

const signInFailure = function (error) {
  console.log(error)
}

const signOutSuccess = function (data) {
  console.log('Success logged out')
  store.user = null
}

const signOutFailure = function (error) {
  console.log(error)
}

const changePasswordSuccess = function (data) {
  console.log('Success')
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
  patchGameFailure
}
