const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/events', eventController.addEvent);
router.get('/events/date/:date', eventController.getEventsByDate);
router.get('/events/location/:location', eventController.getEventsByLocation);

module.exports = router;