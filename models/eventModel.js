const events = [];

// Add an event
function addEvent(event) {
  events.push(event);
}

// Get events by date
function getEventsByDate(date) {
  return events.filter(event => event.date === date);
}

// Get events by location
function getEventsByLocation(location) {
  return events.filter(event => event.location.toLowerCase() === location.toLowerCase());
}

module.exports = {
  addEvent,
  getEventsByDate,
  getEventsByLocation
};