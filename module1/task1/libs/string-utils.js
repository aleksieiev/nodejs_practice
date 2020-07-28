const transform = (string) => {
    return string ?
        string.toString().split("").reverse().join("") : string;
}

const STOP_WORD = '\\@exitplease';

const isEnough = (word) => {
    return word && (STOP_WORD === word);
}

module.exports = {
    transform,
    isEnough,
    STOP_WORD
}
