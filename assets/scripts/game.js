'use strict'

let player = 0

const checkSquare = function (squareSelected) {
  if (squareSelected.hasClass('pOne') || squareSelected.hasClass('pTwo')) {
    console.log('Invalid Space')
  } else {
    console.log('We made it')
  }
}

const addHandlers = function () {
  $('.col-xs-4').on('click', function (event) {
    let squareSelected = $(this)
    console.log(squareSelected)
    checkSquare(squareSelected)
  })
}

module.exports = {
  addHandlers,
  checkSquare
}
