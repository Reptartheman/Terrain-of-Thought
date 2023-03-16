//this works
const router = require("express").Router();
//this works
//const userRoutes = require("./api/userRoutes");

const homeRoutes = require("./api/homeRoutes");

const apiRoutes = require("./api");

const landingRoutes = require("./landingRoutes");
//const { route } = require("./api/userRoutes");

//this works
//router.use("/users", userRoutes);
router.use("/", landingRoutes);
//this is what breaks it
//router.use("/parks", homeRoutes);

router.use("/api", apiRoutes)

//this works
module.exports = router;