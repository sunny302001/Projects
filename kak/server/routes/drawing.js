const express = require('express');
const router = express.Router();

// WebSocket handling (Socket.IO)
router.handleSocketIO = (io) => {
  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('draw', (data) => {
      io.emit('draw', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
};

module.exports = router;
