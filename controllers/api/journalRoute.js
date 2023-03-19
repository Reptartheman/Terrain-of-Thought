// const router = require('express').Router();
// const { Journal, Park } = require('../../models');
// const withAuth = require("../../utils/auth");

//   router.get('/journal/:id', withAuth, async (req, res) => {
//     try {
//       const parkID = await Park.findByPk(req.params.id, {include: [{model: Park}], });
  
//       const parks = parkID.map((park) => park.get({ plain: true }));

//       console.log(parks)
  
//       res.render('journal', {
//         parks,
//         // Pass the logged in flag to the template
//         logged_in: req.session.logged_in,
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
// module.exports = router;

// not getting single journal entry
// cannot login when an already created user tries to login
// cannot logout