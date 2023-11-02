

export default class Check_Winner {

  player1 = "X"
  player2 = "O"
  winnerMarker = null
  winner = ""
  board

  constructor(board) {
    this.board = board
  }

  check(players) {
    if (this.checkHorizontally() !== null || this.checkVertical() !== null /* || this.checkDiagonally() !== "" */) {
      for (let player of players) {
        for (let playerObj in player) {
          if (player[playerObj] === this.winnerMarker) {
            this.winner = player.username
          }
        }
      }
    }
    return this.winner
  }


  checkHorizontally() {
    for (let i = 0; i < this.board.length - 1; i++) {
      let arrayFromBoard = this.filter_list(this.board[i].split(""))
      let countSame = 1
      for (let u = 0; u < arrayFromBoard.length - 1; u++) {
        if (arrayFromBoard[u] == arrayFromBoard[u + 1] && arrayFromBoard[u] !== " ") {
          countSame++
          if (countSame == 4) {
            return this.winnerMarker = arrayFromBoard[u]
          }
        } else {
          countSame = 1
        }
      }
    }
    return this.winnerMarker = null
  }

  checkVertical() {
    for (let i = 1; i < this.board[0].length; i += 2) {
      let countSame = 1
      for (let u = 0; u < this.board.length - 2; u++) {
        if (this.board[u].charAt(i) == this.board[u + 1].charAt(i) && this.board[u].charAt(i) !== " ") {
          countSame++
          if (countSame == 4) {
            this.winnerMarker = this.board[u].charAt(i)
            return this.winnerMarker
          }
        } else {
          countSame = 1
        }
      }
    }
    return this.winnerMarker = null
  }

/*   checkDiagonally() {
    this.winnerMarker = ""
    return this.winnerMarker
  } */

  filter_list(arr) {
    return arr.filter(element => element !== '|');
  }

}