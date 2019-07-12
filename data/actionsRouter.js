const express = require('express');
const Actions = require('./helpers/actionModel');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const actions = await Actions.get();
        res.status(200).json(actions);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'The project requested could not be retrieved' })
    }
});

router.post('/', async (req, res) => {
    try{
        const addAction = await Actions.insert(req.body);
        res.status(200).json({message: 'created successfully', addAction} )
    } catch(err) {
        res.status(500).json({ message: 'Action could not be added.' });
    }
});

router.put('/:id', async (req, res) => {
    try{
        const action = await Actions.get(req.params.id, req.body);
        if(!action){
            res.status(404).json({ message: 'Action was not found' })
        } else {
            await Actions.update(req.params.id, req.body)
            res.json({ message: 'Updated succesfully!' })
        }
    } catch(err){
        res.status(500).json({ message: 'Server error' })
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const count = await Actions.remove(req.params.id);
        if(count > 0) {
            res.status(204).end();
        } else {
            res.status(404).json({ message : 'The action requested does not exist.' })
        }
    } catch(err){
        res.status(500).json({ message: 'Failed to delete.' })
    }
});



module.exports = router;