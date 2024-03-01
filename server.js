require('dotenv').config();

//! Imports
const http = require('node:http');
const app = require('./app-server');

//! Create Web server (+ Express)
const server = http.createServer(app);

//! TODO Add Socket.io 

//? Start Web server
const { PORT, NODE_ENV } = process.env;

server.listen(PORT, () => {
    console.log(`Web server is running on port ${PORT} (Mode: ${NODE_ENV})`);
});