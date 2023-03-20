
const { User } = require('../models')

// Saves and stores user information to check authentication

const userData = [
  {
    username: 'Lebron',
    email: 'email1@mail.com',
    password: 'James'
  },
  {
    username: 'Ozzy',
    email: 'email@mail.com',
    password: 'Osbourne'
  }
]

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;