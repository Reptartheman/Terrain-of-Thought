const router = require("express").Router();
const { Journal, Park } = require("../models");
const withAuth = require("../utils/auth");

//find all parks and render to homepage
router.get("/", withAuth, async (req, res) => {
  try {
    const parkData = await Park.findAll({});
    const parks = parkData.map((park) => park.get({ plain: true }));
    console.log(parks)

    res.render("homepage", { parks, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
