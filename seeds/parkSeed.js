const { Park } = require('../models');

const parkData = [
  {
    parkName: 'Yosemite',
    location: 'California',
    activities: 'Hiking, Camping, Rock Climbing',
  },

  {
    parkName: 'Grand Canyon National Park',
    location: 'Arizona',
    activities: 'Hiking, River Rafting',
  }
]


const seedParkData = () => Park.bulkCreate(parkData);

module.exports = seedParkData;