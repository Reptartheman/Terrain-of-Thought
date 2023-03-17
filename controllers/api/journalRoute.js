const router = require('express').Router();
const { Journal, Park } = require('../../models');

router.get('/journal/:id', async(req, res) => {
    const parkId = await Park.findByPk(req.params.id);
    const parkEntry = Journal[parkId];
    if (parkEntry) {
      res.send(parkEntry);
    } else {
      res.status(404).send('Parks entry not found');
    }
  });
  


// router.get('/journal/:id', async(req, res) => {
//     try{
//         const journalData = await Journal.findAll({});
//         const entries = journalData.map((entry) => entry.get({plain: true}))
//         // Sending park data to handlebars
//         const parkData = await Park.findByPk(req.params.id);
//         const park = parkData.get({ plain: true });
//         res.render('journal', {
//             park,
//             logged_in: req.session.logged_in})
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

// router.post('/journal/:id', async (req, res) => {
// 
//})

// router.put('/journal/:id', async (req, res) => {
// 
//})

// router.post('/journal/:id', async (req, res) => {
//     try {
//         const newEntry = await Journal.create({
//             ...req.body, park_id: req.params.id
//         })
//         res.json(newEntry)
//     } catch (err) {
//         res.status(400).json(err)
//     }
// })
module.exports = router;

