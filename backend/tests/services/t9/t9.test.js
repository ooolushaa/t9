const t9 = require('../../../services/t9');
const T9ExpectedResults = require('./t9.expected');

T9ExpectedResults.forEach(expectedResult => {
  test('test on number string ' + expectedResult.numbers, () => {
    if (!expectedResult.isError) {
      expect(t9.processNumbers(expectedResult.numbers)).toEqual(expectedResult.expectedResult);
    } else {
      expect(() => { t9.processNumbers(expectedResult.numbers) }).toThrowError(expectedResult.expectedResult);
    }
  });
})