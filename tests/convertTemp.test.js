// Create two test cases for converting between celsius and fahrenheit
// Test case 1: Converting 30 deg celsius will return 86 deg fahrenheit
// Test case 2: Converting 104 deg fahrenheit will return 40 deg celsius
// Both test cases need to pass

//Note: To test =>  npm test convertTemp.test.js

const Converter = require('../src/convertTemp');

const convert = new Converter()

//Test case 1
test('30 deg Celsius will return 86 deg Fahrenheit', () => {
    expect(convert.convertToFahrenheit(30)).toBe(86);
})

//Test case 2
test('104 de Fahrenheit will return 40 deg Celsius', () => {
    expect(convert.convertToCelsius(104)).toBe(40);
})