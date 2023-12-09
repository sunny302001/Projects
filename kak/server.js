const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const drawingRoutes = require('./routes/drawing');
const userRoutes = require('./routes/user');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/drawingApp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Handle MongoDB connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static('public'));
app.use(bodyParser.json());

// Use routes
app.use('/drawing', drawingRoutes);
app.use('/user', userRoutes);

// Handle WebSocket (Socket.IO) for drawing
drawingRoutes.handleSocketIO(io);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
