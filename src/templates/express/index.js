/**
 * Created by Vlad Pantea on 12/2/2017.
 */
'use strict';
//setup env's
const diContainer = require('di-containerx')();

diContainer.register('dotenv', require('dotenv').load({silent: true}));
diContainer.register('express', require('express'));
diContainer.register('bodyParser', require('body-parser'));
diContainer.register('helmet', require('helmet'));
diContainer.factory('route', require('./src/routers/routes'));
diContainer.factory('mainController', require('./src/controllers/main.controller'));

const express = diContainer.get('express');
const app = express();

const helmet = diContainer.get('helmet');
const bodyParser = diContainer.get('bodyParser');

app.use(helmet());

// create application/json parser
const jsonParser = bodyParser.json();
diContainer.factory('jsonParser', jsonParser);

const mainController = diContainer.get('mainController');
const route = diContainer.get('route');
app.use('/api',route.definedRoutes);

var server = app.listen(process.env.SERVICE_PORT, () => console.log('Example app listening on port %s!',process.env.SERVICE_PORT));

module.exports = {
    express: server
}
