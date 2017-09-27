'use strict'

let startBoard = []
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
    } else {
      event.target.innerText = 'O'
      playerOne = 1
    }
  })
}

module.exports = {
  cell,
  startBoard,
  playerTwo,
  playerOne,
  winCombos,
  target
}
