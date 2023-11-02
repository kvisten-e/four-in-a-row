import Players from "./players.js";
import Round from "./game-logic/round.js";
import PromptSync from "prompt-sync";
import GameBoard from "./game-board.js";
const prompt = PromptSync({ sigint: true })

let players = []
let gameBoard
let playAgain


//Enter username and place in players
/* players.push(new Players(prompt("Enter username for player 1: ").toLowerCase()))
players.push(new Players(prompt("Enter username for player 2: ").toLowerCase())) */
players.push({ username: 'kvisten', wins: '1', losses: '2' },)
players.push({ username: 'karl', wins: '3', losses: '2' })

// Add marker to players
Object.assign(players[0], { marker: "X" })
Object.assign(players[1], { marker: "O" })

do {
  //Start new round
  let getWinner = startGame()
  //update resualt
  updatePlayerData(getWinner)
  //play again?
  playAgain = prompt("That was fun, play again? (Y): ").toUpperCase()
} while (playAgain === "Y") {
  console.log("slut")
}



function startGame(){
  //import game-board
  gameBoard = new GameBoard().Board
  console.log(gameBoard)
  //Start round
  let round = new Round(players, gameBoard)
  return round.winner
}

function updatePlayerData(winner) {
  for (let player of players) {
    if (winner == player.username) {
      player.wins = (Number(player.wins) + 1).toString()
    } else {
      player.losses = (Number(player.losses) + 1).toString()
    }
  }
}



//play again
