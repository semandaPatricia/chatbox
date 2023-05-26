const express = require('express')
const app = express()
//const http =require('https').createServer(app)
const http = require('http');
const server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server)
const PORT = process.env.PORT ||  8000


//serving HTML
app.get('/' ,(req,res)=>{
    res.sendFile(__dirname+'/index.html')
});

   //socket

io.on('connection', (socket) => {
    socket.on('chat message', msg => {
      io.emit('chat message', msg);
    });
  });

//port
server.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT} !`)
}) 