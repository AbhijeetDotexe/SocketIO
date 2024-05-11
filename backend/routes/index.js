const express = require('express');
const clickDataController = require('../controllers/clickDataController');

const router = express.Router();

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('A user connected');

    // Event listener for clickData event
    socket.on('clickData', (data) => {
      console.log('Received click data:', data);
      clickDataController.saveClickData(data);
    });
  });

  return router;
};