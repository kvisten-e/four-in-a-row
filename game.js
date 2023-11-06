import {Players, updateUserData} from "./players.js";
import Round from "./game-logic/round.js";
import PromptSync from "prompt-sync";
import GameBoard from "./game-board.js";
const prompt = PromptSync({ sigint: true })

let players = []
let gameBoard
let playAgain


for (let i = 1; i <= 2; i++){
  let nameLength = prompt(`Enter username for player ${i}: `).toLowerCase()
  if (nameLength.length <= 20) {
    players.push(new Players(nameLength))
  } else {
    console.log("Max length of username is 20\n")
    i--
  }
}

Object.assign(players[0], { marker: "X" })
Object.assign(players[1], { marker: "O" })

do {
  let getWinner = startGame()

  updatePlayerData(getWinner)

  playAgain = prompt("\nThat was fun, play again? (y): ").toLowerCase()
} while (playAgain === "y") {
  for (let player of players) {
    delete player.marker
  }
  new updateUserData(players)
}


function startGame() {
  gameBoard = new GameBoard().Board
  
  startingGameText()

  console.log(gameBoard)
  let round = new Round(players, gameBoard)
  return round.winner
}

function updatePlayerData(winner) {
  if (winner !== "") {
    for (let player of players) {
      if (winner == player.username) {
        player.wins = (Number(player.wins) + 1).toString()
      } else {
        player.losses = (Number(player.losses) + 1).toString()
      }
    }    
  } else {
    for (let player of players) {
      player.draw = (Number(player.draw) + 1).toString()
    } 
  }

}
  
function startingGameText() { 
  console.log(`\n     Starting game\n\n          |\n          |\n          |\n          |\n          |\n          |\n          |\n          ▼\n`)
}


