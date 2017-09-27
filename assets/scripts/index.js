'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')
const game = require('./game')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('.col-xs-4').on('click', events.test)
  $('#test').on('click', events.test)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
