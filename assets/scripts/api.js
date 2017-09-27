'use strict'
const store = require('./store')
const config = require('./config')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp
}
