let chalk = require('chalk');
let log = (function(chalk) {
    return function(topic, content) {

        let isValidColor = function(color) {
            return color.substr(0, 2) != "bg" && color != "reset" && color != "inverse" && color != "hidden"  && color != "strikethrough" && color != "underline"  && color != "italic" && color != "dim" && color != "bold";
        }

        let getAllColors = function() {
            let colors= [];
            for(var m in chalk.styles) {
                if(isValidColor(m)) {
                    colors.push(m)
                }
            }
            return colors;
        }
        let getRandomColor = function() {
            let colors = getAllColors();
            return colors[Math.floor(Math.random()*colors.length)];
        }

        let createTopic = function(topic) {
            this.topics[topic] = {name: topic, color: getRandomColor()}
        }

        if(typeof this.topics != "Object") {
            this.topics = {};
        }
        if(this.topics[topic] === undefined) {
            createTopic(topic);
        }

        console.log(chalk[this.topics[topic].color].bold("[" + this.topics[topic].name + "] ") + content);
    }
})(chalk);

module.exports = log;
