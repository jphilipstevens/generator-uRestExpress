/**
 * Created by Vlad Pantea on 12/2/2017.
 */
'use strict';
//setup env's
require('dotenv').load({
    silent: true
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');

app.use(helmet());

// create application/json parser
const jsonParser = bodyParser.json();

const mainController = require('./src/controllers/main.controller')();
const route = require('./src/routers/routes')(express,app,jsonParser,mainController);

var server = app.listen(process.env.SERVICE_PORT, () => console.log('Example app listening on port %s!',process.env.SERVICE_PORT));

module.exports = {
    express: server
}
