let messageDispatcher = (function() {
    return function() {
        let work = function(message) {
            console.log("<"+message.author.username + "> " + message.content);
        }
        return {
            work: work,
        }
    }
})();

module.exports = messageDispatcher();
