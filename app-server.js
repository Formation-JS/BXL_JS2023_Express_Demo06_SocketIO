require('dotenv').config();

//! Imports
const express = require('express');
require('express-async-errors');
const homeRouter = require('./routes/home.router');

//! Web Server
const app = express();

//? View engine
app.set('view engine', 'ejs');
app.set('views', './views');

//? Middleware
app.use(express.static('./public'));

//? Routing
app.use(homeRouter);

//! Exports
module.exports = app; 