import {appendFileSync, readFileSync } from "node:fs"

let usersData = readFileSync('data/users.csv', 'utf8')
let usersDataArr = usersData.split('\n')

export default class Players{
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
      appendFileSync('data/users.csv', `${this.username},${this.wins},${this.losses}\n`, 'utf8')
    }
  }
}