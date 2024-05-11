const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');
const mongoose = require('./config/mongoose');
const routes = require('./routes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Enable CORS for all origins
app.use(cors());

// Serve the frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
app.use('/api', routes(io));

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});