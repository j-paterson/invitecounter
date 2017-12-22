
let eventDispatcher = (() => {
    return function() {

        let controller = () => {

        }

        let work = body => {
            console.log(`[eventDispatcher] ${body}`);
        }
        return {
            work: work,
        }
    }
})();

module.exports = eventDispatcher();
