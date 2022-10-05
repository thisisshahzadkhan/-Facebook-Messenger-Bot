const express = require('express');
const { verification, reply } = require('../controllers');
const router = express.Router();

router.get('/webhook', verification);

router.post('/webhook', reply);

module.exports = router;
