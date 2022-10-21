const sum = require('../sum');

describe('finding sum of two numbers', () => {
    const testCases = [
        {
            a: 1,
            b: 2,
            expected: 3
        },
        {
            a: 11,
            b: 23,
            expected: 34
        },
        {
            a: 12113,
            b: 221,
            expected: 12334
        },
        {
            a: 100,
            b: 2,
            expected: 102
        },
        {
            a: 908,
            b: 20,
            expected: 928
        },
        {
            a: 55,
            b: 2,
            expected: 57
        },
        {
            a: 91,
            b: 12,
            expected: 103
        }
    ];
    testCases.forEach(test => {
        it(`should correctly find the sum of ${test.a} and ${test.b} which is ${test.expected}`, () => {
            const output = sum(test.a, test.b);
            expect(output).toEqual(test.expected);
        });

    });
});