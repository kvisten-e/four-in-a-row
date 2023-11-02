import Players from "./players.js";
import Round from "./game-logic/round.js";
import PromptSync from "prompt-sync";
import GameBoard from "./game-board.js";
const prompt = PromptSync({ sigint: true })

let players = []
let gameBoard

//Enter username and place in players
/* players.push(new Players(prompt("Enter username for player 1: ").toLowerCase()))
players.push(new Players(prompt("Enter username for player 2: ").toLowerCase())) */
players.push({ username: 'kvisten', wins: '1', losses: '2' },)
players.push({ username: 'karl', wins: '3', losses: '2' })

//import game-board
gameBoard = new GameBoard().Board

// Add marker to players
Object.assign(players[0], { marker: "X" })
Object.assign(players[1], { marker: "O" })


//Start round
let round = new Round(players, gameBoard)

//print out winner

//update resualt


//play again
