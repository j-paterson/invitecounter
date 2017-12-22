let commandRegistry = require('../command/registry.js').get();
let controller = require('../command/controller.js');
let commandDispatcher = (function(commandRegistry, controller) {
    return () => {

        let argumentLexer = message => {
            let command = "";
            let argv = [];
            if(typeof message.content != "string") {
                return false;
            } else {
                argv = message.content.split(" ").slice(1);
                command = message.content.split(" ")[0].substr(1);
                return {invoker: message.author, name: command, argv: argv, argc: argv.length, message: message}
            }
        }

        let work = message => {
            let command = argumentLexer(message);
            controller(command);
        }
        return {
            work: work,
        }
    }
})(commandRegistry, controller);

module.exports = commandDispatcher();
