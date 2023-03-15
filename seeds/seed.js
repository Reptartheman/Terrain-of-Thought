const sequelize = require('../config/connection');
const { User, Park } = require('../models');

const userData = require('./userSeed');
const parkData = require('./parkSeed');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const parks = await Park.bulkCreate(parkData,{
    individualHooks: true,
    returning: true,
  });
}
seedDatabase();


  