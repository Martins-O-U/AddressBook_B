const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('firebase-admin');
const serviceAccount = require('./admin.json')
const contactlist = require('./Component/ContactList/ContactControl')
const helmet = require('helmet');


fs.initializeApp({
    Credential: fs.Credential.cert(serviceAccount)
})
const db = fs.firestore();


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