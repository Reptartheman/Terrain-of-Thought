// This page will retrieve all of our data for the home page...GET
const router = require("express").Router();
const withAuth = require("../utils/auth")
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

router.get("/mydashboard",withAuth, (req, res) => {
 res.render('journal')
  //const userData = await User.findone(where: {id:req.session.user_id})
})

module.exports = router;
