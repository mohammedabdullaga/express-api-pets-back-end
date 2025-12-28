const express = require('express');
const pet = require('../models/pet');
const router = express.Router();




router.post('/', async (req,res) => {
    res.json(req.body);
});

module.exports = router;