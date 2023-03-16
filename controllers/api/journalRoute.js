const router = require('express').Router();
const { Journal, User } = require('../../models');


router.post('/journal', async (req, res) => {
    try {
        const newEntry = await Journal.create({
            ...req.body
        })
        res.json(newEntry)
    } catch (err) {
        res.status(400).json(err)
    }
})

