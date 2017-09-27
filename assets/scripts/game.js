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
console.log('This is cell', cell)
console.log('This is cell.id', cell.id)

const test = function () {
  $('.col-xs-4').one('click', function (event) {
    event.target.innerText = playerOne
    console.log(playerOne)
    console.log('this is the click')
    event.preventDefault()
  })
}

module.exports = {
  cell,
  startBoard,
  playerTwo,
  playerOne,
  winCombos,
  test
}
