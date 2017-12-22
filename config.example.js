let Config = (key, standard) => {

    let variables = {
        token: "<YOUR BOT TOKEN YOUR BOT TOKEN YOUR BOT TOKEN>",
        commanddelim: "!",
    }

    return variables[key] || standard;
}
module.exports = Config;
