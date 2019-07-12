const express = require('express');
const helmet = require('helmet');

const server = express();
//--

const projectsRouter = require('./data/projectsRouter');
const actionsRouter = require('./data/actionsRouter');

//--

server.use(helmet());
server.use(express.json());

//--

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);



server.get('/', (req, res) => {
    res.send(`<h3>Sanity check</h3>`);
})


module.exports = server;