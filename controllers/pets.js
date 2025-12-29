const express = require('express');
const Pet = require('../models/pet');
const router = express.Router();




router.post('/', async (req,res) => {
    try {
        const pet = await Pet.create(req.body);
        res.status(201).json({pet})
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'failed to create pet'});
    }

});

router.get('/', async (req,res) => {
    try {
        const pets = await Pet.find({});
        res.status(200).json({ pets });
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'faild to get pets'});
    }
});

router.get('/:id', async (req,res) => {
    try {
        const {id} = req.params
        const pet = await Pet.findById(id);
        if(!pet){
            res.status(404).json({error: 'pet not Found'})
        }else{
            res.status(200).json({pet})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'faild to get pet'});
    }
});

router.delete('/:id', async (req,res) => {
    try {
        const {id} = req.params
        const pet = await Pet.findByIdAndDelete(id);
        if (!pet){
            res.status(404).json({error: 'pet not found'});
        } else {
            res.status(200).json({pet});
        }
        res.status(200).json('succesfully deleted');
    } catch (error) {
       console.log(error);
       res.status(500).json({error: 'faild to Delete pet'}) ;
    }
});

router.put('/:id', async (req,res) => {
    try {
        const {id} = req.params
        const pet = await Pet.findByIdAndUpdate(req.params.id,req.body, {new: true});
        if (!pet) {
            res.status(404).json({error: 'pet not found'});
        } else {
            res.status(200).json({pet})
        }
        res.status(200).json('succesfully updated')
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'faild to update pet'});
    }
});



module.exports = router;