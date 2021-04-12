require('dotenv').config()
const express=require('express')
const port = process.env.PORT || 4100
const compression = require('compression')
const path = require('path');
const app = express()
const cors = require('cors');
const helmet = require('helmet');
const contact = require('./Component/ContactList/ContactControl')


app.use(express.urlencoded())
app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'static', 'views'))
app.set('view engine', 'ejs')

server.use(
    cors({
        origin: '*',
        methods: 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    })
);
app.use(helmet());

app.use(compression())
app.use('/public', express.static(path.join(__dirname, 'static', 'public')))

app.use('/api', contact)

let admin = require("firebase-admin");
app.locals.bucket = admin.storage().bucket()



app.get('/', (req, res)=>{
    res.json({message: "Welcome to the default zone, please specify a path"})
})

module.exports = app;