const router = require("express").Router();

const homeRoutes = require("./homeRoutes");

const apiRoutes = require("./api");

const landingRoutes = require("./landingRoutes");

const journalRoutes = require("./journalRoute")

router.use("/homepage", homeRoutes);
router.use("/", landingRoutes);
router.use("/journal", journalRoutes);

router.use("/api", apiRoutes);

module.exports = router;