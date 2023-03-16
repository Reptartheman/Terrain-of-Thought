const router = require('express').Router();
const { User, Park } = require('../../models');

 router.get('/homepage', async (req, res) => {
    try{
        const parkData = await Park.findAll({
            include: ['name', 'state', 'activities']
        });
        
        

        res.render('homepage');
    } catch (err){
        res.status(500).json(err);
    }
}); 