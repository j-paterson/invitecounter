
//Load Dependencies
let log = require('./logger/log.js');
log('log', 'Loading...');
let Discord = require('discord.js');
let config = require('./config.js');
let dispatcher = require('./dispatcher/dispatcher.js');
let commandReflector = require('./command/reflector.js');
let client = new Discord.Client();

// Reflect on all the commandclasses
commandReflector.loadCommands();

client.on('ready', () => {
    dispatcher('ready', 'event');
});

client.on('message', message => {
    dispatcher(message, 'message');
});
client.login(config('token'));
