const express = require('express');
const helmet = require('helmet');

const server = express();
//--

server.use(helmet());
server.use(express.json());

//--



server.get('/', (req, res) => {
    res.send(`<h3>Sanity check</h3>`);
})


module.exports = server;