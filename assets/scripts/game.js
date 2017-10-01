'use strict'

const api = require('./api')
const ui = require('./ui')

let player = 0
let board = ['', '', '', '', '', '', '', '', '']
let emptySquares = 9
let over = false

const createBoard = function (id) {
  if (player === 0) {
    board[id] = 'X'
  } else {
    board[id] = 'O'
  }
}

const aiSymbol = function () {
  $('#activeSymbolId').text('O')
  $('#activeSymbolId').css('color', 'rgba(255, 0, 0, 1)')
  $('#activeSymbolId').css('text-shadow', '0 3px 9px rgba(225, 10, 10, 1)')
}

const pOneSymbol = function () {
  $('#activeSymbolId').text('X')
  $('#activeSymbolId').css('color', 'rgba(36, 198, 224, 1)')
  $('#activeSymbolId').css('text-shadow', '0 3px 9px rgba(36, 198, 24, 1)')
}

const pTwoSymbol = function () {
  $('#activeSymbolId').text('O')
  $('#activeSymbolId').css('color', 'rgba(255, 0, 0, 1)')
  $('#activeSymbolId').css('text-shadow', '0 3px 9px rgba(225, 10, 10, 1)')
}

const endClick = function () {
  $('.col-xs-4').off('click')
}

const emptySquareTotal = function () {
  emptySquares -= 1
  if (emptySquares === 0) {
    showTie()
  } else {
    over = false
    return false
  }
}

const showTie = function () {
  $('#result').text('Tie Game')
  endClick()
  over = true
  return true
}

const checkWin = function (player) {
  if ($('#0').hasClass(player) && $('#1').hasClass(player) && $('#2').hasClass(player)) {
    endClick()
    over = true
    return true
  } else if ($('#3').hasClass(player) && $('#4').hasClass(player) && $('#5').hasClass(player)) {
    endClick()
    over = true
    return true
  } else if ($('#6').hasClass(player) && $('#7').hasClass(player) && $('#8').hasClass(player)) {
    endClick()
    over = true
    return true
  } else if ($('#0').hasClass(player) && $('#3').hasClass(player) && $('#6').hasClass(player)) {
    endClick()
    over = true
    return true
  } else if ($('#1').hasClass(player) && $('#4').hasClass(player) && $('#7').hasClass(player)) {
    endClick()
    over = true
    return true
  } else if ($('#2').hasClass(player) && $('#5').hasClass(player) && $('#8').hasClass(player)) {
    endClick()
    over = true
    return true
  } else if ($('#0').hasClass(player) && $('#4').hasClass(player) && $('#8').hasClass(player)) {
    endClick()
    over = true
    return true
  } else if ($('#2').hasClass(player) && $('#4').hasClass(player) && $('#6').hasClass(player)) {
    endClick()
    over = true
    return true
  } else {
    emptySquareTotal()
  }
}

const aiMoves = function () {
  if (board[4] === '') {
    $('#4').addClass('pTwo').text('O')
    board[4] = 'O'
    player = 0
    pOneSymbol()
  } else if (board[2] === '' && Math.random() < 0.5) {
    $('#2').addClass('pTwo').text('O')
    board[2] = 'O'
    player = 0
    pOneSymbol()
  } else if (board[6] === '' && Math.random() < 0.5) {
    $('#6').addClass('pTwo').text('O')
    board[6] = 'O'
    player = 0
    pOneSymbol()
  } else if (board[0] === '' && Math.random() < 0.5) {
    $('#0').addClass('pTwo').text('O')
    board[0] = 'O'
    player = 0
    pOneSymbol()
  } else if (board[8] === '' && Math.random() < 0.5) {
    $('#8').addClass('pTwo').text('O')
    board[8] = 'O'
    player = 0
    pOneSymbol()
  } else if (board[3] === '' && Math.random() < 0.5) {
    $('#3').addClass('pTwo').text('O')
    board[3] = 'O'
    player = 0
    pOneSymbol()
  } else if (board[5] === '' && Math.random() < 0.5) {
    $('#5').addClass('pTwo').text('O')
    board[5] = 'O'
    player = 0
    pOneSymbol()
  } else if (board[1] === '' && Math.random() < 0.5) {
    $('#1').addClass('pTwo').text('O')
    board[1] = 'O'
    player = 0
    pOneSymbol()
  } else if (board[7] === '' && Math.random() < 0.5) {
    $('#7').addClass('pTwo').text('O')
    board[7] = 'O'
    player = 0
    pOneSymbol()
  } else if (board[2] === '') {
    $('#2').addClass('pTwo').text('O')
    board[2] = 'O'
    player = 0
    pOneSymbol()
  } else if (board[6] === '') {
    $('#6').addClass('pTwo').text('O')
    board[6] = 'O'
    player = 0
    pOneSymbol()
  } else if (board[0] === '') {
    $('#0').addClass('pTwo').text('O')
    board[0] = 'O'
    player = 0
    pOneSymbol()
  } else if (board[8] === '') {
    $('#8').addClass('pTwo').text('O')
    board[8] = 'O'
    player = 0
    pOneSymbol()
  } else if (board[3] === '') {
    $('#3').addClass('pTwo').text('O')
    board[3] = 'O'
    player = 0
    pOneSymbol()
  } else if (board[5] === '') {
    $('#5').addClass('pTwo').text('O')
    board[5] = 'O'
    player = 0
    pOneSymbol()
  } else if (board[1] === '') {
    $('#1').addClass('pTwo').text('O')
    board[1] = 'O'
    player = 0
    pOneSymbol()
  } else if (board[7] === '') {
    $('#7').addClass('pTwo').text('O')
    board[7] = 'O'
    player = 0
    pOneSymbol()
  }
}

const aiCellInput = function (squareSelected) {
  if (player === 0) {
    squareSelected.addClass('pOne').text('X')
    if (checkWin('pOne') === true) {
      $('#result').text('PLAYER ONE WINS')
    } else {
      aiSymbol()
      aiMoves()
      if (checkWin('pTwo') === true) {
        $('#result').text('MASTER CONTROL WINS')
      }
    }
  }
}

const cellInput = function (squareSelected) {
  if (player === 0) {
    squareSelected.addClass('pOne').text('X')
    if (checkWin('pOne') === true) {
      $('#result').text('PLAYER ONE WINS')
    } else {
      player = 1
      pTwoSymbol()
    }
  } else {
    squareSelected.addClass('pTwo').text('O')
    if (checkWin('pTwo') === true) {
      $('#result').text('PLAYER TWO WINS')
    } else {
      player = 0
      pOneSymbol()
    }
  }
}

const checkSquare = function (squareSelected) {
  if (squareSelected.hasClass('pOne') || squareSelected.hasClass('pTwo')) {
    $('#result').text('INVALID MOVE')
  } else {
    cellInput(squareSelected)
  }
}

const checkAiSquare = function (squareSelected) {
  if (squareSelected.hasClass('pOne') || squareSelected.hasClass('pTwo')) {
    $('#result').text('INVALID MOVE')
  } else {
    aiCellInput(squareSelected)
  }
}

const addHandlers = function () {
  $('.col-xs-4').on('click', function (event) {
    const squareSelected = $(this)
    createBoard(this.id)
    checkSquare(squareSelected)
    const cellIndex = this.id
    const cellValue = board[this.id]
    const gameOver = over
    const data = {'game': {
      'cell': {
        'index': cellIndex,
        'value': cellValue
      },
      'over': gameOver
    }
    }
    api.updateGame(data)
      .then(ui.patchGameSuccess)
      .catch(ui.patchGameFailure)
  })
}

const addAiHandlers = function () {
  $('.col-xs-4').on('click', function (event) {
    const squareSelected = $(this)
    createBoard(this.id)
    checkAiSquare(squareSelected)
    const cellIndex = this.id
    const cellValue = board[this.id]
    const gameOver = over
    const data = {'game': {
      'cell': {
        'index': cellIndex,
        'value': cellValue
      },
      'over': gameOver
    }
    }
    api.updateGame(data)
      .then(ui.patchGameSuccess)
      .catch(ui.patchGameFailure)
  })
}

const onReplay = function (event) {
  $('.col-xs-4').removeClass('pOne')
  $('.col-xs-4').removeClass('pTwo')
  $('.col-xs-4').empty()
  $('#result').empty()
  board.length = []
  player = 0
  $('.col-xs-4').unbind('click')
  addHandlers()
  emptySquares = 9
  $('#result').text('GAME GRID RELOADED')
  pOneSymbol()
}

const onAiReplay = function (event) {
  $('.col-xs-4').removeClass('pOne')
  $('.col-xs-4').removeClass('pTwo')
  $('.col-xs-4').empty()
  $('#result').empty()
  board = ['', '', '', '', '', '', '', '', '']
  player = 0
  $('.col-xs-4').unbind('click')
  addAiHandlers()
  emptySquares = 9
  $('#result').text('MASTER CONTROL RELOADED')
  pOneSymbol()
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
  endClick,
  pOneSymbol,
  addAiHandlers,
  onAiReplay
}
