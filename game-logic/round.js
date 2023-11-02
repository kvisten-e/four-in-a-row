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
    console.log(this.players)
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
    let winner = new Check_Winner(this.board).check(this.players)

    if (this.counter == 42) {
      console.log("\nGame over - no won")
    } else if (winner !== "") {
      console.log("\nGame over", "\nThe winner is: ", winner)
    } else {
      this.round()
    }



    console.log(this.players)
    console.log(this.board)

    /*     this.count += placeMarker.counter
    p("Placed markers: ", this.count)

    let checkWin = new CheckWin()
    let winner = checkWin.check(this.setPlayer.players)
    if (this.count == 42) {
      p("\nGame over - no won")
    } else if (winner !== "") {
      p("\nGame over", "\nThe winner is: ", winner)
    } else {
      this.round()
    } */
  }

/*   resetRound() {
    this.count = 0
    this.board = new GameField()._gameField
    p(this.board)
  } */





  get winner() {
    return winner
  }
}