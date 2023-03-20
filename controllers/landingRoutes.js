// This page will retrieve all of our data for the home page...GET
const router = require("express").Router();

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

module.exports = router;
