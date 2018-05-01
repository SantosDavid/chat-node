'use strict';

import config from './config/server';

import express from "express";

import consign from "consign";

import { urlencoded } from "body-parser";

import expressValidator from "express-validator";

var app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/app/Views');

app.use(urlencoded({ extended: true }));

app.use(expressValidator());

consign()
    .include('src/app/Routes')
    .into(app);

var server = app.listen(config.port, function () { });