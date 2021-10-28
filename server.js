require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const methodOverride = require('method-override');
const session = require('express-session');
const bcrypt = require('bcrypt');
const db = require('./models');
// const fetch = require('node-fetch');
const { urlencoded } = require('body-parser');

const PORT = process.env.PORT || 3000;

app.use(express.static('./views/public'));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.SESSION_SECRET || '12345',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000000000
    }
}))

app.get('/', (req, res) => {
    res.render('home');
})

app.set('view engine', 'ejs');
app.listen(PORT, console.log(`App Listening at ${PORT}`));