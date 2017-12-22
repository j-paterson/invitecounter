let fs = require('fs');
let registry = require('./registry.js');
let log = require('../logger/log.js');
let reflector = ((fs, registry) => {
    return () => {

        let loadCommands = () => {
            let commands = fs.readdirSync('./addons/');
            for(let i = 0; i < commands.length; i++) {
                if(commands[i].match(/^\w+\.js$/)) {                    
                    log('reflector', 'loading addon: ' + commands[i].substring(0, commands[i].length - 3));
                    registry.add(require('../addons/' + commands[i]));
                }
            }
        }

        return {
            loadCommands: loadCommands,
        }
    }
})(fs, registry, log);
module.exports = reflector();
