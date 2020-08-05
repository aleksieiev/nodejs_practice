import readline from 'readline';

const ioService = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const reverseString = (input) => {
    return input ? input.toString().split('').reverse().join('') : input;
};

const transformValue = (input) => {
    const result = reverseString(input);
    console.log(result);
};

ioService.on('line', transformValue);
