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

  // router.get('/journal/:id', withAuth, async (req, res) => {
  //   try {
  //     const parkID = await Park.findByPk(req.params.id, {include: {model: Park, required: true}, });
  
  //     const parks = parkID.map((park) => park.get({ plain: true }));

  //     console.log(parks)
  
  //     res.render('journal', {
  //       parks,
  //       // Pass the logged in flag to the template
  //       logged_in: req.session.logged_in,
  //     });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });
  
// module.exports = router;

// router.get("/journal", async (req, res) => {
//   try {
//     const journalData = await Journal.findAll({});
//     const entries = journalData.map((entry) => entry.get({ plain: true }));
//     res.render("journal");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
