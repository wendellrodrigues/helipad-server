//Dependencies list
const express       = require ('express');
const http          = require("http");
const bodyParser    = require('body-parser');
const routes        = require('./routes/routes');
const socketIO      = require('socket.io');
let socket          = require('socket.io-client')('http://127.0.0.1:8000');
const users         = require('./helpers/users');

const socketPort    = 8000;

//For process.env variables
require('dotenv').config();

//Initilize App
const app       = express();
const appSocket = express();
const server    = http.createServer(appSocket);
const io        = socketIO(server);


// Body parser Middleware parses HTTP requests into readable json format
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes PATH
app.use('/routes', routes);

//Initialize App
app.listen(process.env.PORT || 5000, () => {
  console.log(`App is listening on PORT ${process.env.PORT}`)
});

server.listen(socketPort, () => console.log(`Socket listening on PORT ${socketPort}`))

//Setting up a socket with the namespace "connection" for new sockets
io.on("connection", socket => {
  console.log("New client connected");

  //Here we listen on a new namespace called "incoming data"
  socket.on("incoming data", (data)=>{
      //Here we broadcast it out to all other sockets EXCLUDING the socket which sent us the data
     socket.broadcast.emit("outgoing data", {num: data});
  });

  //A special namespace "disconnect" for when a client disconnects
  socket.on("disconnect", () => console.log("Client disconnected"));
});

/**
 * Sends Drone State to server every 100ms
 */
setInterval(function() {
  let droneObj = users.currentState;
  console.log(droneObj);
  socket.emit('incoming data', droneObj);
}, 2000)






