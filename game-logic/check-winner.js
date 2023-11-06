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
    if (this.checkHorizontally() !== null || this.checkVertical() !== null || this.checkDiagonally() !== null) {
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

  checkDiagonally() {

    for (let yy = 2; yy >= 0; yy--) {
      let count = 1
      let x = 1
      for (let y = yy; y < 6; y++) {
        if (this.board[y][x] == this.board[y + 1][x + 2] && this.board[y][x] !== ' ') {
          count++
          if (count == 4) {
            return this.winnerMarker = this.board[y][x]
            
          }
        }
        x += 2
      }
    }

    for (let xx = 1; xx <= 7; xx += 2) {
      let count = 1
      let x = xx
      for (let y = 0; y < 6; y++) {
        if (this.board[y][x] == this.board[y + 1][x + 2] && this.board[y][x] !== ' ') {
          count++
          if (count == 4) {
            return this.winnerMarker = this.board[y][x]
          }
        }
        x += 2
      }
    }

    for (let yy = 3; yy <= 5; yy++) {
      let count = 1
      let x = 1
      for (let y = yy; y > 0; y--) {
        if (this.board[y][x] == this.board[y - 1][x + 2] && this.board[y][x] !== ' ') {
          count++
          console.log("count", count)
          if (count == 4) {
            return this.winnerMarker = this.board[y][x]
          }
        }
        x += 2
      }
    }

    for (let xx = 7; xx >= 1; xx -= 2) {
      let count = 1
      let x = xx
      for (let y = 5; y > 0; y--) {
        if (this.board[y][x] == this.board[y - 1][x + 2] && this.board[y][x] !== ' ') {
          count++
          if (count == 4) {
            return this.winnerMarker = this.board[y][x]
          }
        }
        x += 2
      }
    }
    return this.winnerMarker = null
  }

  filter_list(arr) {
    return arr.filter(element => element !== '|');
  }

}