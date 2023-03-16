const router = require('express').Router();
const userRoutes = require('./userRoutes');
//const journalRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
//router.use('/journal', journalRoutes);

module.exports = router;
