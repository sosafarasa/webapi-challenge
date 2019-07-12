const express = require('express');
const Projects = require('./helpers/projectModel');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get();
        res.status(200).json(projects);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'The project requested could not be retrieved' })
    }
});

router.post('/', async (req, res) => {
    try{
        const addAction = await Actions.insert(req.body);
        res.status(200).json({ message: 'Action added!' })
    } catch(err) {
        res.status(500).json({ message: 'Action could not be added.' });
    }
});

router.put('/:id', async (req, res) => {
    try{
        const action = await Actions.get(req.params.id);
        if(!action){
            res.status(404).json({ message: 'Action was not found' })
        } else {
            await Actions.update(re.params.id, req.body)
            res.json({ message: 'Updated succesfully!' })
        }
    } catch(err){
        res.status(500).json({ message: 'Server error' })
    }
});


module.exports = router;