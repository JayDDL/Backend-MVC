# Prerequisites
Before you begin, ensure you have the following installed:

- Node.js (v12 or higher)
- npm (Node Package Manager)

# Installation
- Clone the repository using your terminal:

git clone https://github.com/JayDDL/Backend-MVC.git

- Open the folder with your IDE of choice
- Install dependencies using your terminal:

npm install

# Running the Server
- In your terminal, enter:

node app.js

# API Endpoints
Here are the available API endpoints you can use with this server:

## POST an Event

URL: http://localhost:3000/api/events
Method: POST
Content-Type: application/json
Request Body:
{
  "name": "Event Name",
  "location": "Event Location",
  "date": "YYYY-MM-DD"
}

## GET all events:
URL: http://localhost:3000/api/events
Method: GET

## GET events by Date:
URL: http://localhost:3000/api/events/date/:date
Method: GET
URL Parameters:
:date (required) - The date in YYYY-MM-DD format.

## GET events by Location:
URL: http://localhost:3000/api/events/location/:location
Method: GET
URL Parameters:
:location (required) - The location of the events.

# Notes
Ensure your server is running before making any requests.
Dates should be formatted as YYYY-MM-DD.
Location strings should be URL-encoded (e.g., spaces as %20).