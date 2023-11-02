import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })

export default class Place_checker {

  letterToNumber
  boardArr
  boardSaved
  letter

  constructor(letter) {
    this.chooseLetter(letter)
  }

  get board() {
    return this.boardSaved
  }

  placeCheckerOnBoard(player, board) {
    let bool = false
    for (let i = 5; i >= 0; i--) {
      this.letterToNumberConvert()

      this.boardSaved = board
      this.boardArr = board[i].split("")

      if (this.boardArr[this.letterToNumber] === " ") {
        this.boardArr.splice([this.letterToNumber], 1, player.marker)
        this.boardSaved.splice(i, 1, this.boardArr.join(""))
        bool = true
        break
      }
    }
    console.log(this.boardSaved)
    return bool
  }

  chooseLetter(letter) {
    this.letter = prompt(letter).toUpperCase()
    let letterContainer = "ABCDEFG"
    if (!letterContainer.includes(this.letter)) {
      this.chooseLetter("Choose between A-G: ")
    }
  }

  //'| | | | | |  |   |'
  //' 1 3 5 7 9 11 13
  //' A B C D E F  G
  letterToNumberConvert() {
    switch (this.letter) {
      case "A":
        this.letterToNumber = 1
        break
      case "B":
        this.letterToNumber = 3
        break
      case "C":
        this.letterToNumber = 5
        break
      case "D":
        this.letterToNumber = 7
        break
      case "E":
        this.letterToNumber = 9
        break
      case "F":
        this.letterToNumber = 11
        break
      case "G":
        this.letterToNumber = 13
        break
    }
  }
}