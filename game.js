import Players from "./players.js";
import PromptSync from "prompt-sync";
import GameBoard from "./game-board.js";
const prompt = PromptSync({ sigint: true })

let players = []
let gameBoard

//Enter username and place in players
players.push(new Players(prompt("Enter username for player 1: ").toLowerCase()))
players.push(new Players(prompt("Enter username for player 2: ").toLowerCase()))

//import game-board
gameBoard = new GameBoard().Board

