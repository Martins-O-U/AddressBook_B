const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');


const helmet = require('helmet');
const server = express();


server.use(
    cors({
        origin: '*',
        methods: "POST"
    })
);
server.use(helmet());
server.use(express.json());


server.get('/', (req, res) => {
    return res.json({ message: 'API is up ' });
});

module.exports = server;