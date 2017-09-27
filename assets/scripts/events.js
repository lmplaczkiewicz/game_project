'use strict'

const game = require('./game')
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('Did we make it?')
}

const addHandlers = function () {
  $('#credential').on('submit', onSignUp)
}

module.exports = {
  addHandlers,
  onSignUp
}
