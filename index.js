//index.js
const http = require("http");
const express = require("express");
const PTYService = require("./PTYService");
const cors = require("cors");
const SocketService = require("./SocketService");

const PORT = 8080;

const serverApp = express();
serverApp.use(cors());
server = serverApp.listen(PORT, function() {
  console.log(`Listening on : ${PORT}`);
  const socketService = new SocketService();
  socketService.attachServer(server);
});

