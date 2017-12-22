let log = require('../logger/log.js');

let controller = ((log) => {
    return command => {
        log()
        let register = require('./registry.js');
        register = register.get();
        register[command.name].work(command);

        return {

        }
    }
})(log);
module.exports = controller;
