const fs = require('fs');

const init = (path) => {
    return fs.createWriteStream(path);
}

const append = (writeStream, data) => writeStream.write(JSON.stringify(data) + '\n');

const end = (writeStream) => writeStream.end();

module.exports = {
    init,
    append,
    end
}
