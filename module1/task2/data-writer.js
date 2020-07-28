const dataWriter = (data) =>  new Promise((resolve) => {
    console.log('from promise');
    console.log(data);
    resolve();
});

module.exports = {
    dataWriter
}
