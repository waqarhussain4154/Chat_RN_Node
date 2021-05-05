// const express = require("express");
// const app = express();
// const server = require("http").createServer(app);
// var io = require("socket.io");
// const port = 3000;

// io.on("connection", socket => {
//   console.log("a user connected :D");
//   socket.on("chat message", msg => {
//     console.log(msg);
//     io.emit("chat message", msg);
//   });
// });

// server.listen(port, () => console.log("server running on port:" + port));


const { response } = require("express");
const { request, Server } = require("http");

var ip = require("ip");
var app = require("express")();
//var http = require("http").createServer(app);
var io = require("socket.io");
const port = 3000;
const Ip = ip.address();
const server = app.listen(port, Ip, () =>
  console.log("Server is listening at Ip:" + Ip)
);
const webSocket = io(server);

app.get("/MYServer", (request, response) => {
  console.log("request", request);
  //   response.send("<h1> My Server .Js</h1>");
  //response.sendFile(__dirname + "/index.html");
  response.send("A is Connected");
});
webSocket.on("connection", socket => {
  console.log("a user connected :D");
  socket.on("chat message", msg => {
    console.log(msg);
    webSocket.emit("chat message", msg);
  });
});
// webSocket.on("connection", (socket) => {
//   //   socket.on("chat message", (msg) => {
//   //     io.emit("chat message", msg);
//   //   });
//   // socket.broadcast.emit("hi");
//   console.log("Connected");
//   socket.on("chat message", (msg) => {
//     console.log("message: " + msg);
//     webSocket.emit("chat message", msg);
//   });

//   //   socket.on("typing", (msg) => {
//   //     console.log("user is typing");
//   //   });

//   //   console.log("A user connected");
//   //   socket.on("disconnect", () => {
//   //     console.log("A user disconnected");
//   //   });
// });

// app.listen(3000, Ip, () => {
//   console.log("Server is listening at IP:" + Ip);
// });
