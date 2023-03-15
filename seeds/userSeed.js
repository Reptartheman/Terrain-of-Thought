
const { User } = require('../models')

const userData = [
  {
    username: 'Lebron',
    email: 'email@mail.com',
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