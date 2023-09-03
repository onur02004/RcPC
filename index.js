const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const{ Server }= require('socket.io');
const io = new Server(server, {
  transports: ['websocket'] // Add the transports option here
});
const port = process.env.PORT || 3100;
const readline = require('readline');
const fs = require('fs');
const path = require('path');


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.json(connectedUsers);
});
   
io.on('connection', (socket) => {
  console.log('User Connected With Id==>' + socket.id);
 
  socket.on('clientMessage', (userData) => {

    console.log(userData);
  });


});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server dinliyo on port ${PORT}`);
});


