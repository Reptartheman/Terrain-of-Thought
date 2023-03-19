// This page will retrieve all of our data for the home page...GET
const router = require("express").Router();
const withAuth = require("../utils/auth")
const Park = require('../models/Park')
router.get("/", async (req, res) => {
  console.log()
  res.render("landing", { logged_in: req.session.logged_in });
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("homepage");
    return;
  }
  res.render("login");
});

// router.get("/journal/:id", withAuth, async (req, res) => {
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

// router.get('/journal/:id', withAuth, async (req, res) => {
//   try {
//     const parkID = await Park.findByPk(req.params.id, {include: [{model: Park}], });

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

module.exports = router;
