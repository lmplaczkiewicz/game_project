'use strict'

const store = require('./store')

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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
