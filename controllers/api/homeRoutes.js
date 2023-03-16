const router = require('express').Router();
const { Journal, Park } = require('../../models');

//find all parks and render to homepage
 router.get('/homepage', async (req, res) => {
    try{
        const parkData = await Park.findAll({})
        const parks = parkData.map((park) => park.get({ plain: true}))
        
        res.render('homepage', { layout: 'main', parks});
    } catch (err){
        res.status(500).json(err);
    }
}); 



router.get('/journal', async(req, res) => {
    try{
        const journalData = await Journal.findAll({});
        const entries = journalData.map((entry) => entry.get({plain: true}))
        res.render('journal')
    } catch (err) {
        res.status(500).json(err)
    }
})

