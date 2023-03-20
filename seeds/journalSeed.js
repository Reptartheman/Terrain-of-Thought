const { Journal } = require('../models')


// This seed data will contain the information sent by the user for each journal entry

const journalData = [
  
  {
    title: 'postnumber1',
    content: 'I am post 1',
    user_id: 1
  },
  {
    title: 'postnumber2',
    content: 'I am post 2',
    user_id: 2

  }
]

const seedJournalData = () => Journal.bulkCreate(journalData);

module.exports = seedJournalData;