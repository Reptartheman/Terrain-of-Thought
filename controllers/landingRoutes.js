// This page will retrieve all of our data for the home page...GET
const router = require('express').Router();



router.get('/', async (req, res) => {
res.render('landing')
});


router.get('/login', async (req, res) => {
  if(req.session.logged_in) {
    res.redirect('homepage')
    return;
  }
  res.render('login')
});





module.exports = router;
