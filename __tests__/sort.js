const sort = require('../sort');


describe('Sorting the given array', () => {
    const testCases = [
        {
            list: [2, 1, 3],
            expected: [1, 2, 3]
        },
        {
            list: [1, 1, 1, 1, 1],
            expected: [1, 1, 1, 1, 1]
        },
        {
            list: [5, 4, 3, 2, 1],
            expected: [1, 2, 3, 4, 5]
        }
        , {
            list: [2],
            expected: [2]
        },
        {
            list: [1, 2, 3, 9, 8, 7],
            expected: [1, 2, 3, 7, 8, 9]
        }
    ];
    testCases.forEach(test => {
        it(`should correctly sort the given array ${test.list} to ${test.expected}`, () => {
            const output = sort(test.list);
            expect(output).toStrictEqual(test.expected);
        });
    });
});
