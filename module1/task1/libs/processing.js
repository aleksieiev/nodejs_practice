const {isEnough, transform} = require("./string-utils");

const processingFunction = (word, onContinue, onExit) => {
    return  isEnough(word) ? onExit() : onContinue(transform(word));
};

module.exports = {
    processingFunction
}
