import { appendFileSync, readFileSync } from "node:fs"

let usersData = readFileSync('data/users.csv', 'utf8')
let usersDataArr = usersData.split('\n')

export class Players{
  username
  wins = 0
  losses = 0

  constructor(username) {
    this.username = username
    this.checkUserData() 
  }

  checkUserData() {
    let foundUser = false
    for (let user of usersDataArr) {
      user = user.split(",")
      if (user[0] == this.username) {
        this.wins = user[1]
        this.losses = user[2]
        foundUser = true
        break
      }
    }
    if (!foundUser) {
      appendFileSync('data/users.csv', `\n${this.username},${this.wins},${this.losses}`, 'utf8')
    }
  }
}

export class updateUserData {
  players = []
  constructor(players) {
    this.players = players
    this.createNewDataArr() 
  }

//Uppdatera users.csv sidan---- sista kvar här nedan

  createNewDataArr() {
    console.log("usersDataArr ", usersDataArr)
    let index = 0
    for (let user of usersDataArr){
      user = user.split(',')
      for (let player of this.players) {
        if (player.username == user[0]) {
          user[1] = player.wins
          user[2] = player.losses
          console.log("Uppdaterad user: ", user.toString())
          console.log("Index: " , index)
          usersDataArr.splice(index,1,user.toString())
        }
      }
      index++
    }
  }

}