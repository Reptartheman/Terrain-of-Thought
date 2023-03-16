// this index sets up the routes for the entire application
const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");



router.use("/", homeRoutes);
router.use("/api", apiRoutes)

module.exports = router;
