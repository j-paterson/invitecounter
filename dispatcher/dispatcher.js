let chalk = require('chalk');
let config = require('../config.js');

let Dispatcher = (function(chalk) {
    return function(body, channel) {
        let dispatcher;

        // Reflect the controller for each channel
        if(channel === "event") {
            dispatcher = require("./event.js");
        } else if(channel === "message") {
            // Here there are two controllers with the same channel, based on the
            // Body, we can figure out which of the controllers needs to be loaded.
            if(body.content[0] === config('commanddelim', "!") && !body.author.bot) {
                dispatcher = require("./command.js");
            } else {
                dispatcher = require("./message.js");
            }
        }
        // Run the retrieved controller and void-driven run the controller.
        dispatcher.work(body);
    }
})(chalk,config);

module.exports = Dispatcher;
