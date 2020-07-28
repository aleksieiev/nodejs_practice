const {ioService} = require("./libs/io-service");
const {processingFunction} = require('./libs/processing');

ioService.onNewLine(processingFunction);
ioService.setPrompt('Enter your phrase> ');
ioService.prompt();
