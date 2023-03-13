//you will need to link the other routes here if you add more
const router = require("express").Router();
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);

module.exports = router;
