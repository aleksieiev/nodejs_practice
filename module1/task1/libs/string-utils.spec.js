const {describe, expect, it} = require("@jest/globals");

const {transform, isEnough, STOP_WORD} = require("./string-utils");

describe('`transform` function tests of `string-utils.js` module', function () {
    it('should return the same value in case of `null` parameter', () => {
        expect(transform(null)).toBe(null);
    });

    it('should return the same value in case of `undefined` parameter', () => {
        expect(transform(undefined)).toBe(undefined);
    });

    it('should return the same value in case of `NaN` parameter', () => {
        expect(transform(NaN)).toBe(NaN);
    });

    it('should return empty string in case of passed empty string', () => {
        expect(transform("")).toBe("");
    });

    it('should return reversed string in case of passed valid string', () => {
        expect(transform("abs")).toBe("sba");
    });

    it('should return reversed string in case of number passed', () => {
        expect(transform(123)).toBe("321");
    });

    it('should return reversed string in case of function passed', () => {
        const actual = transform(() => {
        });
        expect(actual).toBeDefined();
    });
});

describe('`isEnough` function tests of `string-utils.js` module', function () {
    it('should return false in case of `null` parameter', () => {
        expect(isEnough(null)).toBeFalsy();
    });

    it('should return false in case of `undefined` parameter', () => {
        expect(isEnough(undefined)).toBeFalsy();
    });

    it('should return false in case of `NaN` parameter', () => {
        expect(isEnough(NaN)).toBeFalsy();
    });

    it('should return false in case of passed empty string', () => {
        expect(isEnough("")).toBeFalsy();
    });

    it('should return false in case of passed valid string', () => {
        expect(isEnough("abs")).toBeFalsy();
    });

    it('should return false in case of number passed', () => {
        expect(isEnough(123)).toBeFalsy();
    });

    it('should return true in case of stop word passed', () => {
        const actual = isEnough(STOP_WORD);
        expect(actual).toBeTruthy();
    });
});
