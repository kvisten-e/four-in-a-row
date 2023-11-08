import { appendFileSync, readFileSync, writeFileSync  } from "node:fs"

let usersData = readFileSync('data/users.csv', 'utf8')
let usersDataArr = usersData.split('\n')

export class Players{
  username
  wins = 0
  losses = 0
  draw = 0

  constructor(username) {
    this.username = username
    this.checkUserData() 
  }

  checkUserData() {
    let foundUser = false
    for (let user of usersDataArr) {
      user = user.split(",")
      if (user[0] == this.username) {
        console.log(`\nWelcome back ${user[0]}. \nStats: wins = ${user[1]} losses = ${user[2]} draw = ${user[3]}\n`)
        this.wins = user[1]
        this.losses = user[2]
        foundUser = true
        break
      }
    }
    if (!foundUser) {
      usersDataArr.push(`${this.username},${this.wins},${this.losses},${this.draw}`)
      console.log(`\nNew user: ${this.username}, welcome!\n`)
    }
  }
}

export class updateUserData {
  players = []
  constructor(players) {
    this.players = players
    this.createNewDataArr() 
  }

  createNewDataArr() {
    let index = 0
    for (let user of usersDataArr){
      user = user.split(',')
      for (let player of this.players) {
        if (player.username == user[0]) {
          user[1] = player.wins
          user[2] = player.losses
          user[3] = player.draw
          usersDataArr.splice(index,1,user.toString())
        }
      }
      index++
    }
    this.puchNewDataToUsersCsv()
  }

  puchNewDataToUsersCsv() {
    writeFileSync('data/users.csv', '', 'utf8')
    appendFileSync('data/users.csv', usersDataArr.join('\n'), 'utf8')
  }

  showUserResult() {
    console.log('\nGame ended\n')
    for (let player of this.players) {
      console.log(`\nResult ${player.username}: \nwins = ${player.wins}\nlosses = ${player.losses}\ndraw = ${player.draw}`)
    }
  }
}

