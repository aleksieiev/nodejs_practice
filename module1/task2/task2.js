const {dataSource} = require('./data-source');
const {dataWriter} = require('./data-writer');

dataSource('./resources/example.csv', (data) => {
        dataWriter(data);
    },
    (e) => console.log(`I know what you feel bro, but it's an error! ${e}`),
    () => console.log("Parsing completed")
);
