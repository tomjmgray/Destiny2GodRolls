const express = require('express');
const router = express.Router();
const db = require('../models');
const oauth = require('oauth');
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const id = process.env.BUNGIE_OAUTH_CLIENT_ID;
const key = process.env.BUNGIE_API_KEY

const oauthFetcher = new oauth.OAuth2(
    id,
    key,
    'https://www.bungie.net/Platform',
    'https://www.bungie.net/en/OAuth/Authorize',
    'https://www.bungie.net/Platform/App/OAuth/token/'
);

router.get('/bungie', (req, res) => {
    res.redirect(`https://www.bungie.net/en/oauth/authorize?client_id=${id}&response_type=code&state=6i0mkLx79Hp91nzWVeHrzHG4`)
    
})

module.exports = router;
