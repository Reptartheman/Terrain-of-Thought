const User = require('./User');
const Park = require('./Park');
const Journal = require('./Journal')


Park.hasMany(Journal, {
    foreignKey: 'park_id',
});

Journal.belongsTo(Park, {
    foreignKey: 'park_id',
})

User.hasMany(Journal, {
    foreignKey: 'user_id',
});

Journal.belongsTo(User, {
    foreignKey: 'user_id',
});

// Parks has many Journals
// Journal can have one Park
// User has many Journals
// Journals belong to one User

module.exports = { User, Park, Journal };