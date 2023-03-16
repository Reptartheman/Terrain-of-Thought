const { Park } = require('../models');

const parkData = [
  {
    name: 'Great Smoky Mountains National Park',
    state: 'Tennessee and North Carolina',
    activities: 'Hiking',
    latitude: 35.6131,
    longitude: -83.5532
  },
  {
    name: 'Grand Canyon National Park',
    state: 'Arizona',
    activities: 'Hiking, River Rafting, ',
    latitude: 36.1069,
    longitude: -112.1129
  },
  {
    name: 'Rocky Mountain National Park',
    state: 'Colorado',
    activities: 'Hiking, Camping',
    latitude: 40.3428,
    longitude: -105.6836
  },
  {
    name: 'Zion National Park',
    state: 'Utah',
    activities: 'Hiking, Camping, Group tours, Horseback Riding',
    latitude: 37.2982,
    longitude: -113.0263
  },
  {
    name: 'Yosemite National Park',
    state: 'California',
    activities: 'Hiking, Camping, Rock Climbing',
    latitude: 37.8651,
    longitude: -119.5383
  },
  {
    name: 'Yellowstone National Park',
    state: 'Wyoming',
    activities: 'Hiking, Camping',
    latitude: 44.4280,
    longitude: -110.5885
  },
  {
    name: 'Acadia National Park',
    state: 'Maine',
    activities: 'Hiking, Rock Climbing, Biking, Horseback Riding',
    latitude: 44.338554,
    longitude: -68.273338
  },
  {
    name: 'Grand Teton National Park',
    state: 'Wyoming',
    activities: 'Hiking, Mountaineering, Camping',
    latitude: 43.802460,
    longitude: -110.483078
  },
  {
    name: 'Olympic National Park',
    state: 'Washington',
    activities: 'Hiking, Backpacking, Wildlife Viewing',
    latitude: 48.242321,
    longitude: -124.525742
  },
  {
    name: 'Glacier National Park',
    state: 'Montana',
    activities: 'Hiking, Scenic Driving',
    latitude: 48.502281,
    longitude: -113.988533
  },
  {
    name: 'Joshua Tree National Park',
    state: 'California',
    activities: 'Camping, Stargazing',
    latitude: 34.072170,
    longitude: -115.517662
  },
  {
    name: 'Bryce Canyon National Park',
    state: 'Utah',
    activities: 'Hiking, Skiing, Rock Climbing',
    latitude: 37.5930,
    longitude: -112.1871
  },
  {
    name: 'Cuyahoga Valley National Park',
    state: 'Ohio',
    activities: 'Hiking, Scenic Driving',
    latitude: 41.2808,
    longitude: -81.5678
  },
  {
    name: 'Gateway Arch National Park',
    state: 'Missouri',
    activities: 'Strolling, Learning about History',
    latitude: 38.6247,
    longitude: -90.1855
  },
  {
    name: 'Indiana Dunes National Park',
    state: 'Indiana',
    activities: 'Hiking, Kayaking, Bird Watching',
    latitude: 41.6533,
    longitude: -87.0524
  },
];


const seedParkData = () => Park.bulkCreate(parkData);

module.exports = seedParkData;