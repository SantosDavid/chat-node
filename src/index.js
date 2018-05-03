'use strict';

import config from './config/server';

import express from "express";

import consign from "consign";

import { urlencoded } from "body-parser";

import expressValidator from "express-validator";

import socketIO from "socket.io";

var app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/app/Views');
app
app.use(urlencoded({ extended: true }));

app.use(expressValidator());

consign()
    .include('src/app/Routes')
    .into(app);

const server = app.listen(config.port, function () { });

const io = socketIO(server);

io.on('connection', function(socket){
    
    socket.on('newUser', function(dados){
        io.emit('newUserConnectedMsg', {apelido: dados.apelido, mensagem: 'entrou no chat!'});
    });

    socket.on('newMessage', function(dados){
        io.emit('newMessageView', {apelido: dados.apelido, mensagem: dados.mensagem});
    })
});