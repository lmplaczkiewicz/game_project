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
console.log('This is cell', cell)
console.log('This is cell.id', cell.id)

const target = function () {
  $('.col-xs-4').one('click', function (event) {
    event.preventDefault()
    event.target.innerText = playerOne
    if (playerOne === 1) {
      event.target.innerText = 'X'
      playerOne = 0
      emptySquares -= 1
      checkTie()
    } else {
      event.target.innerText = 'O'
      playerOne = 1
      emptySquares -= 1
      checkTie()
    }
  })
}

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

module.exports = {
  cell,
  startBoard,
  playerTwo,
  playerOne,
  winCombos,
  target
}
