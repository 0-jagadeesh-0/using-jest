# Jest

- Jest is a Javascript Testing Framework.

**Installing Jest**

`
npm install jest --save-dev
`

Now you have to add jest to test in scripts in package.json

```
"script":{
    "test":"jest"
}
```

This repository will help you to learn how to write test cases in javascript.

**Step-1**

Create a file sum.js

```
const sum = (a,b)=>{
    return a+b;
}
module.exports = sum;
```

**Step-2**

Now you need to test the above sum function by passing some test cases.

For that you need to create a folder named __tests__ 

Now create file sum.js in that folder where we are going to write the test cases.

There you can describe your test cases and check the sum function.

```
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
     testCases.forEach(testIdx => {
        test(`should correctly find the sum of ${testIdx.a} and ${testIdx.b} which is ${testIdx.expected}`, () => {
            const output = sum(testIdx.a, testIdx.b);
            expect(output).toEqual(testIdx.expected);
        });

    });
});
```

**Step-3**

Now you can test the sum function by running the below command

`
npm run test
`


![Test Cases](https://github.com/0-jagadeesh-0/learn-jest/blob/master/assets/sum-test-cases.png)
