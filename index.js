//index.js
const http = require("http");
//const SocketService = require("./SocketService");
const { Server } = require("ws");
const wss = new Server({server});

const PORT = process.env.PORT || 8080;

wss.on("connection", (ws) => {
  console.log("Client Connected");
  was.on("close", () => console.log("Client Disconnected"))
})

/* 
  Create Server from http module.
  If you use other packages like express, use something like,

  const app = require("express")();
  const server = require("http").Server(app);

*/
// const server = http.createServer();
// const options = {cors:true, origins:["*:*"]};
// const io = require("socket.io")(server, options);

// const port = 8080;

<<<<<<< HEAD
// server.listen(port, function() {
//   console.log("Server listening on : ", port);
//   const socketService = new SocketService();
=======
server.listen(process.env.PORT || port, function() {
  console.log("Server listening on : ", port);
  const socketService = new SocketService();
>>>>>>> c048212e2204b94ccce222ee0e643a3db97631a5

//  // We are going to pass server to socket.io in SocketService.js
//   socketService.attachServer(server);
// });
