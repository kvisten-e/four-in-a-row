import Place_checker from "./place-checker.js"
import Check_Winner from "./check-winner.js"

export default class Round{
  players = []
  board
  winner = ""
  counter = 0

  constructor(players, board) {
    this.board = board
    this.players = players
    this.round()
  }

  round() {
    let place = new Place_checker(`${this.players[0].username}, place your marker ${this.players[0].marker} on (A-G): `)
    let bool = false
    do {
      if (place.placeCheckerOnBoard(this.players[0], this.board)) {
        this.counter++
        this.players.unshift(this.players.pop())
        bool = false
      } else {
        place = new Place_checker(`${place.letter} is full, choose again: `)
        bool = true
      }
    }while(bool)

    this.board = place.board

    console.log("Placed checkers: ", this.counter)

    this.winner = new Check_Winner(this.board).check(this.players)

    if (this.counter == 42) {
      console.log("\nGame over - no won")
    } else if (this.winner !== "") {
      console.log("\nGame over", "\nThe winner is: ", this.winner)
    } else {
      this.round()
    }
  }

  get winner() {
    return this.winner
  }
}