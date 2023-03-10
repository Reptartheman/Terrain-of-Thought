const { Park } = require('../models');
const parkData = [
  {
    name: 'Great Smoky Mountains National Park',
    state: 'Tennessee and North Carolina',
    activites: 'Hiking',
  },
  {
    name: 'Grand Canyon National Park',
    state: 'Arizona',
    activities: 'Hiking, River Rafting, ',
  },
  {
    name: 'Rocky Mountain National Park',
    state: 'Colorado',
    activities: 'Hiking, Camping',
  },
  {
    name: 'Zion National Park',
    state: 'Utah',
    activities: 'Hiking, Camping, Group tours, Horseback Riding',
  },
  {
    name: 'Yosemite National Park',
    state: 'California',
    activities: 'Hiking, Camping, Rock Climbing',
  },
  {
    name: 'Yellowstone National Park',
    state: 'Wyoming',
    activities: 'Hiking, Camping',
  },
  {
    name: 'Acadia National Park',
    state: 'Maine',
    activities: 'Hiking, Rock Climbing, Biking, Horseback Riding',
  },
  {
    name: 'Grand Teton National Park',
    state: 'Wyoming',
    activities: 'Hiking, Mountaineering, Camping',
  },
  {
    name: 'Olympic National Park',
    state: 'Washington',
    activities: 'Hiking, Backpacking, Wildlife Viewing',
  },
  {
    name: 'Glacier National Park',
    state: 'Montana',
    activities: 'Hiking, Scenic Driving',
  },
  {
    name: 'Joshua Tree National Park',
    state: 'California',
    activities: 'Camping, Stargazing',
  },
  {
    name: 'Bryce Canyon National Park',
    state: 'Utah',
    activities: 'Hiking, Skiing, Rock Climbing',
  },
  {
    name: 'Cuyahoga Valley National Park',
    state: 'Ohio',
    activities: 'Hiking, Scenic Driving',
  },
  {
    name: 'Gateway Arch National Park',
    state: 'Missouri',
    activities: 'Strolling, Learning about History',
  },
  {
    name: 'Indiana Dunes National Park',
    state: 'Indiana',
    activities: 'Hiking, Kayaking, Bird Watching',
  },
];
const seedParks = () => Park.bulkCreate(parkData);
module.exports = seedParks;