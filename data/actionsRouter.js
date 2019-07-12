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

router.get('/:id', async (req, res) => {
    try{
        const action = await Actions.get(req.params.id);
        if(action){
            res.status(200).json(action);
        } else {
            res.status(404).json({ message: 'The action requested does not exist.' });
        }
    } catch(err) {
        res.status(500).json({ error: 'The action requested could not be retrieved.' });
    }
});

module.exports = router;