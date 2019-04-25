var express = require('express');
var router = express.Router();
var controller = require('../controllers/event.js');
var createEvent = controller.createEvent;
var selectEvent = controller.selectEvent;
var path = require('path');
var eventModel = require('../models/event');

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'../views/index.html'));
})
router.get('/view',async function(req, res) {
    let events = await eventModel.find();
    res.render(path.join(__dirname,'../views/display.ejs'),{events:events});
});
router
.get('/single',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/single.html'));
    })

router.post('/add',createEvent);

module.exports = router;
