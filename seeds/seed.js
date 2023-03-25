const sequelize = require('../config/connection');
const { User, Park, Journal } = require('../models');

const userData = require('./userSeed');
const seedParkData = require('./parkSeed');
const journalData = require('./journalSeed')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await userData();
  await seedParkData();
  await journalData();

  process.exit()
  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

//   const parks = await Park.bulkCreate(parkData,{
//     individualHooks: true,
//     returning: true,
//   });
 }
seedDatabase();


  