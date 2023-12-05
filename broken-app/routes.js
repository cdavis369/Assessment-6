const express = require('express');
const router = new express.Router();
const apiCalls = require('./api-calls');
router.get('/');

router.get('/', (req, res) => {
    res.json({res:"you're in"});
});

router.post('/', async (req, res) => {
    if (!req.query.developers || req.query.developers.length == 0) {
        res.json({failed: 'developers required'})
    }
    const devs = JSON.parse(req.query.developers);
    const userData = await apiCalls.getUsers(devs);
    res.json(userData)
});

module.exports = router;