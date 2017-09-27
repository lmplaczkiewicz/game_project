'use strict'

let startBoard = []
let emptySquares = 9
let activePlayer = ''
let playerOne = 'X'
let playerTwo = 'O'
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

const cell = document.querySelectorAll('.col-xs-4')
const board = []

const convert = function () {
  for (let i = 0; i < cell.length; i++) {
    board.push(i)
  }
  console.log(board)
}

convert()

const turn = function () {
  if (playerOne === 1) {
    startBoard.push(event.target)
    event.target.innerText = 'X'
    playerOne = 0
    checkWin()
    emptySquares -= 1
    checkTie()
  } else {
    event.target.innerText = 'O'
    startBoard.push(event.target)
    playerOne = 1
    checkWin()
    emptySquares -= 1
    checkTie()
  }
}

const start = function () {
  console.log(startBoard)
  $('.col-xs-4').one('click', function (event) {
    event.preventDefault()
    event.target.innerText = playerOne
    turn()
  })
}
// If last square is selected will throw Tie Game even if last square rresults
// win
function checkTie () {
  if (emptySquares === 0) {
    for (let i = 0; i < cell.length; i++) {
      cell[i].style.backgroundColor = 'green'
    }
    $('#result').text('Tie Game')
    return true
  }
  return false
}

function checkWin (startBoard, player) {
  console.log('check for win')
}

module.exports = {
  cell,
  startBoard,
  playerTwo,
  playerOne,
  winCombos,
  start,
  turn,
  checkTie,
  convert
}
