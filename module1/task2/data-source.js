const csv = require('csvtojson');

const converter = (filePath, onNewLineEvent, onError, onComplete) => {
    csv()
        .fromFile(filePath)
        .subscribe(onNewLineEvent, onError, onComplete);
};

module.exports = {
    dataSource: converter
}
