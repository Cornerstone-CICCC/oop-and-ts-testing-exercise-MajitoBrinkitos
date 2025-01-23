// Create two test cases for incrementing and decrementing a number
// Test case 1: counter(4, 'increment') will eventually return 4
// Test case 2: counter(4, 'decrement') will eventually return 0
// Both test cases need to pass
// HINT: Use the jest `resolves` matcher so that it is easier to work with async functions

const counter = require('../src/counter');

//test case 1

test('Counter will increment and return 10', async () => {
    const resultPromise = counter(4, 'increment');

    const result = await resultPromise;
    expect(result).toBe(4);
});

//test case 2
test('Counter will decrement and return 0', async () => {
    const resultPromise = counter(4, 'decrement');

    const result = await resultPromise;
    expect(result).toBe(0);
});