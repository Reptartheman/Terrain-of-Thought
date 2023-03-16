//this works
const router = require("express").Router();
//this works
const userRoutes = require("./api/userRoutes");

const homeRoutes = require("./api/homeRoutes");

const apiRoutes = require("./api");

//this works
router.use("/users", userRoutes);

//this is what breaks it
//router.use("/parks", homeRoutes);

router.use("/api", apiRoutes)

//this works
module.exports = router;