const fs = require('fs');

const init = (path) => {
    return fs.createWriteStream(path);
}

const append = (writeStream, data) => new Promise((resolve) => {
    writeStream.write(JSON.stringify(data) + '\n');
    resolve();
});

const end = (writeStream) => writeStream.end();

module.exports = {
    init,
    append,
    end
}
