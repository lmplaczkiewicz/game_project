'use strict'

let player = 0


const addHandlers = function () {
  $('.col-xs-4').on('click', function (event) {
    let squareSelected = $(this)
    console.log(squareSelected)
  })
}

module.exports = {
  addHandlers
}
