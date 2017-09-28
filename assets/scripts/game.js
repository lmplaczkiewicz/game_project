'use strict'

const event = require('./events')
const api = require('./api')

let player = 0
let board = ['', '', '', '', '', '', '', '', '']
let emptySquares = 9

const createBoard = function (id) {
  if (player === 0) {
    board[id] = 'X'
  } else {
    board[id] = 'O'
  }
}

const endClick = function () {
  $('.col-xs-4').off('click')
}

const emptySquareTotal = function () {
  emptySquares -= 1
  if (emptySquares === 0) {
    showTie()
  } else {
    return false
  }
}

const showTie = function () {
  $('#result').text('Tie Game')
  endClick()
  return true
}

const checkWin = function (player) {
  if ($('#0').hasClass(player) && $('#1').hasClass(player) && $('#2').hasClass(player)) {
    endClick()
    return true
  } else if ($('#3').hasClass(player) && $('#4').hasClass(player) && $('#5').hasClass(player)) {
    endClick()
    return true
  } else if ($('#6').hasClass(player) && $('#7').hasClass(player) && $('#8').hasClass(player)) {
    endClick()
    return true
  } else if ($('#0').hasClass(player) && $('#3').hasClass(player) && $('#6').hasClass(player)) {
    endClick()
    return true
  } else if ($('#1').hasClass(player) && $('#4').hasClass(player) && $('#7').hasClass(player)) {
    endClick()
    return true
  } else if ($('#2').hasClass(player) && $('#5').hasClass(player) && $('#8').hasClass(player)) {
    endClick()
    return true
  } else if ($('#0').hasClass(player) && $('#4').hasClass(player) && $('#8').hasClass(player)) {
    endClick()
    return true
  } else if ($('#2').hasClass(player) && $('#4').hasClass(player) && $('#6').hasClass(player)) {
    endClick()
    return true
  } else {
    emptySquareTotal()
  }
}

const cellInput = function (squareSelected) {
  if (player === 0) {
    squareSelected.addClass('pOne').text('X')
    if (checkWin('pOne') === true) {
      alert('Player One Wins')
    } else {
      player = 1
    }
  } else {
    squareSelected.addClass('pTwo').text('O')
    if (checkWin('pTwo') === true) {
      alert('Player Two Wins')
    } else {
      player = 0
    }
  }
}

const checkSquare = function (squareSelected) {
  if (squareSelected.hasClass('pOne') || squareSelected.hasClass('pTwo')) {
    console.log('Invalid Space')
  } else {
    cellInput(squareSelected)
  }
}

const addHandlers = function () {
  $('.col-xs-4').on('click', function (event) {
    console.log(board)
    let squareSelected = $(this)
    createBoard(this.id)
    checkSquare(squareSelected)
  })
}

const onReplay = function (event) {
  $('.col-xs-4').removeClass('pOne')
  $('.col-xs-4').removeClass('pTwo')
  $('.col-xs-4').empty()
  $('#result').empty()
  addHandlers()
  emptySquares = 9
}

module.exports = {
  addHandlers,
  checkSquare,
  cellInput,
  checkWin,
  emptySquareTotal,
  showTie,
  onReplay,
  createBoard,
  endClick
}
