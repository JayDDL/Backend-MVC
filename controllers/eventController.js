const eventModel = require('../models/eventModel');

// Add try catch block to handle errors

// Add an event
function addEvent(req, res) {
  const { name, location, date } = req.body;
  // Control flow to check that all mandatory attributes are present in the body
  if (!name || !location || !date) {
    return res.status(400).send('All fields are required');
  }

  const event = { name, location, date };
  eventModel.addEvent(event);
  res.status(201).send('Event added successfully');
}

// Retrieve events by date
function getEventsByDate(req, res) {
  const { date } = req.params;
  const events = eventModel.getEventsByDate(date);
  res.json(events);
}

// Retrieve events by location
function getEventsByLocation(req, res) {
  const { location } = req.params;
  const events = eventModel.getEventsByLocation(location);
  res.json(events);
}

// Retrieve all events
function getAllEvents(req, res) {
  const events = eventModel.getAllEvents();
  res.json(events);
}
module.exports = {
  addEvent,
  getEventsByDate,
  getEventsByLocation,
  getAllEvents
};