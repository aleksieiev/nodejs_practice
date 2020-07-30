const {dataSource} = require('./data-source');
const fileWriter = require('./data-writer');

const fileHandler = fileWriter.init('./resources/result.txt');

dataSource('./resources/example.csv', (data) => {
        return fileWriter.append(fileHandler, data);
    },
    (e) => console.log(`I know what you feel bro, but it's an error! ${e}`),
    () => console.log("Parsing completed")
);
