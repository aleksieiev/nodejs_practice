const readline = require("readline");
const ioService = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ioService.on('close', () => {
    process.exit(0);
});

ioService.onNewLine = (processingFunction) => {
    ioService.on('line', (word) => processingFunction(word, (instruction) => {
        console.log(instruction);
        ioService.prompt();
    }, () => {
        ioService.close();
    }));
}

module.exports = {
    ioService
}
