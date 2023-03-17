const router = require("express").Router();
//this works
const userRoutes = require("./userRoutes");

//const homeRoutes = require("./homeRoutes");

//const apiRoutes = require("./api");

//const landingRoutes = require("./landingRoutes");
//const { route } = require("./api/userRoutes");

//this works
router.use("/users", userRoutes);
//router.use("/homepage", homeRoutes);
//router.use("/", landingRoutes);
//this is what breaks it
//router.use("/parks", homeRoutes);

//router.use("/api", apiRoutes);
module.exports = router;
