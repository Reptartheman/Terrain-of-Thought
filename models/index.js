const User = require('./User');
const Park = require('./Park');
const Journal = require('./Journal')



// Parks has many Journals
// Journal can have one Park
// User has many Journals
// Journals belong to one User

module.exports = { User, Park, Journal };