import Place_checker from "./place-checker.js"
import Check_Winner from "./check-winner.js"

export default class Round{
  players = []
  board
  winner 
  counter = 0

  constructor(players, board) {
    this.board = board
    this.players = players
    this.round()
  }

  round() {
    //Place checker
    let place = new Place_checker(this.players[0].username + ", place your marker " + this.players[0].marker + " on (A-G): ")
    if (place.placeCheckerOnBoard(this.players[0], this.board)) {
      this.counter ++
      this.players.unshift(this.players.pop())
    }
    //update board
    this.board = place.board
    //write out round counter
    console.log("Placed checkers: ", this.counter)

    //check winner
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