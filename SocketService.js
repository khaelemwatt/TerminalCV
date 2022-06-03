//SocketService.js
const PTYService = require("./PTYService");
const express = require("express");
const ws = require("ws");
const { Server } = ws;


class SocketService {
  constructor(socket) {
    this.socket = null;
    this.pty = null;
  }

  attachServer(server) {
    if (!server) {
      throw new Error("Server not found...");
    }

    const wss = new Server({ server });

    wss.on("connection", (ws) => {
      console.log("Client Connected");

      this.socket = ws;

      this.pty = new PTYService(this.socket);
      this.socket.on("message", (data) => {
        const message = data.toString();
        console.log(message);
        this.pty.write(message);
      });
    });

    //this.socket.on("Close", () => console.log("Client Disconnected"));
  }
}

module.exports = SocketService;
