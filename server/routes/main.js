var express = require('express');
var router = express.Router();
var controller = require('../controllers/event.js');
var createEvent = controller.createEvent;
var selectEvent = controller.selectEvent;

router.post('/add', createEvent);
router.get('/display', selectEvent);

module.exports = router;
