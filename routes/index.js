const express = require('express');
const { verification, reply, userLog, dymmyWrite } = require('../controllers');
const router = express.Router();

router.get('/webhook', verification);
router.get('/userLog', userLog);
router.get('/dymmyWrite', dymmyWrite);

router.post('/webhook', reply);

module.exports = router;
