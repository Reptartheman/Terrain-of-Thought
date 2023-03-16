//this works
const router = require('express').Router();

//this works
const userRoutes = require('./userRoutes');

const journalRoutes = require('./journalRoute');

//this works
router.use('/users', userRoutes);

//this is what breaks it
//router.use('/journal', journalRoute);

//this works
module.exports = router;