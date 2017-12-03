/**
 * Created by Vlad Pantea on 12/2/2017.
 */
'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();

const mainController = require('./src/controllers/main.controller')();
const route = require('./src/routers/routes')(express,app,jsonParser,mainController);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
