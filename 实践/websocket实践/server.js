const express = require('express');
const SocketServer = require('ws').Server;
const PORT = 3000;

const server = express().listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})

const wss = new SocketServer({server});

wss.on("connection", (ws) => {
    console.log(`Client Connected`);
    wss.on("message", (data) => {
        wss.send(data);
    });

    wss.on("close", () => {
        console.log("Close Connected");
    })
})