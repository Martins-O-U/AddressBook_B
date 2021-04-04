const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactlist = require('./Component/ContactList/ContactControl')


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
server.use('/contact', contactlist)


server.get('/', (req, res) => {
    return res.json({ message: 'API is up ' });
});

module.exports = server;