const router = require("express").Router();
const { Journal, Park } = require("../models");
const withAuth = require("../utils/auth");


router.get('/:id', withAuth, async (req, res) => {
    try {
      const parkID = await Park.findByPk(req.params.id, { include: Journal });
  
      const park = parkID.get({ plain: true });

      console.log(park)
  
      res.render('journal', {
        park,
        // Pass the logged in flag to the template
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });
  
module.exports = router;

