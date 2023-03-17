// const router = require('express').Router();
// const { Journal, Park } = require('../../models');

// //find all parks and render to homepage
//  router.get('/homepage', async (req, res) => {
//     try{
//         const parkData = await Park.findAll({})
//         const parks = parkData.map((park) => park.get({ plain: true}))
        
//         res.render('homepage', { layout: 'main', parks});
//     } catch (err){
//         res.status(500).json(err);
//     }
// }); 



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

// // router.post('/journal/:id', async (req, res) => {
// // 
// //})

// // router.put('/journal/:id', async (req, res) => {
// // 
// //})