const { Journal } = require('../models')


// This seed data will contain the information sent by the user for each journal entry

const journalData = [
  
  {
    input: 'postnumber1',
  
    user_id: 1,
    park_id: 2
  },
  {
    input: 'postnumber2',

    user_id: 2,
    park_id: 1

  }
]

const seedJournalData = () => Journal.bulkCreate(journalData);

module.exports = seedJournalData;