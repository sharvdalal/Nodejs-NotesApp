const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');


// Routes

router.get('/', mainController.homepage);
router.get('/about', mainController.about);


module.exports = router;
