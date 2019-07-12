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


module.exports = router;