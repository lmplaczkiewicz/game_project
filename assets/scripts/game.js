'use strict'

let startBoard = []
let activePlayer = ''
const playerOne = 'O'
const playerTwo = 'X'
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

const test = function () {
  console.log('For the love of ')
}

console.log(cell)
console.log(startBoard)
console.log(playerOne)
console.log(playerTwo)
console.log(winCombos)

module.exports = {
  cell,
  startBoard,
  playerTwo,
  playerOne,
  winCombos,
  test
}
