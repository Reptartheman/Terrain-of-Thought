const router = require("express").Router();
const { Journal } = require("../../models")

router.post("/", async (req, res) =>{
    const journalData= await Journal.create({...req.body, user_id:req.session.user_id})
    res.json(journalData) 
})

module.exports= router; 