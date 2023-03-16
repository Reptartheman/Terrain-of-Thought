// this index is to set up routes for our API
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const journalRoutes = require('./journalRoute');

router.use('/users', userRoutes);
router.use('/journal', journalRoutes);

module.exports = router;
