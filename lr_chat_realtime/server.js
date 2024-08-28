const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('A user connected');

  //messaggio di benvenuto
  socket.emit('notification', 'Benvenuto nella chat!');
  
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });


// Invia una notifica a tutti gli tutti gli utenti connessi
socket.on('send notification', (notification) => {
    io.emit('notification', notification);
});
});

server.listen(3000, () => {
  console.log('Socket.IO server running at http://localhost:3000/');
});
