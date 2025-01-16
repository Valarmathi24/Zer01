const express = require('express');
const router = express.Router();
const validatorController = require('../controllers/validatorController');

router.get('/validator', validatorController.displayMessage);

module.exports = router;
