const express = require('express');
const app = express();
const eventRoutes = require('./routes/eventRoutes');

// JSON Middleware
app.use(express.json());

// Event routes
app.use('/api', eventRoutes);

// Run server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});