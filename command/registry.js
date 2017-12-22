let log = require('../logger/log.js');

let registry = ((log) => {

    return () => {
        let register = {};
        let get = commandname => {
            if(typeof commandname === "string") {
                return register[commandname];
            }
            return register;
        }

        let add = (command) => {
            if(typeof command.work === "function" || typeof command.incantation === "string") {
                if(typeof register[command.incantation] != "string") {
                    log('commandRegistry', `adding command: ${command.incantation}`)
                    register[command.incantation] = command;
                } else {
                    console.error(`command ${command.incantation} is already defined in register.`)
                }
            } else {
                console.error(`invalid command: ${command} an incantation might not be correctly defined, or a work function not implemented`)
            }
        }
        return {
            get: get,
            add: add,
        }
    }
})(log);
module.exports = registry();
