import {Players, updateUserData} from "./players.js";
import Round from "./game-logic/round.js";
import PromptSync from "prompt-sync";
import GameBoard from "./game-board.js";
const prompt = PromptSync({ sigint: true })

let players = []
let gameBoard
let playAgain

async function main() {

  for (let i = 1; i <= 2; i++) {
    let username = prompt(`Enter username for player ${i}: `).toLowerCase()
    if (username.length <= 20) {
      players.push(new Players(username))
    } else {
      console.log("Max length of username is 20\n")
      i--
    }
  }

  Object.assign(players[0], { marker: "X" })
  Object.assign(players[1], { marker: "O" })

  do {
    let getWinner = await startGame()

    updatePlayerScore(getWinner)

    playAgain = prompt("\nThat was fun, play again? (y): ").toLowerCase()
  } while (playAgain === "y") {
    for (let player of players) {
      delete player.marker
    }
    new updateUserData(players)
  }  
}

async function startGame() {
  gameBoard = new GameBoard().Board
  
  await startingGameText()

  console.log(gameBoard)
  let round = new Round(players, gameBoard)
  return round.winner
}

function updatePlayerScore(winner) {
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
  
async function startingGameText() { 
  let count = 0  
  console.log(`\n     Starting game`)

  await new Promise((resolve) => {
    let setPipe = setInterval(pipe,800)
    
    function pipe() {      
      
      if (count == 5) {
        console.log(`          ▼\n`)
      } else if(count < 5 ){
        console.log('          |')
      }
      count++

      if (count > 6) {
        clearInterval(setPipe)
        resolve()
      }
    }   
  })
}

main()
