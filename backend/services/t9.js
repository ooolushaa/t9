const keyMap = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
};

exports.processNumbers = numbersString => {
  if (!numbersString || isNaN(numbersString) || numbersString.indexOf(1) > -1 || numbersString.indexOf(0) > -1) {
    throw "Not valid number string";
  }

  const suggestions = generateStringFromNumbersString(numbersString);

  return suggestions;
};

const generateStringFromNumbersString = numbersString => {
  const numbers = numbersString.split('').map(n => {
    return parseInt(n);
  });

  // recursion first init
  return generateStringFromNumbers(numbers.slice(1), keyMap[numbers[0]].split(""));
}

const generateStringFromNumbers = (numbers, genAccumulator) => {
  if (!numbers.length) {
    return genAccumulator.sort();
  }

  const keys = keyMap[numbers[0]].split("");

  const nextGetAccumulator = keys.reduce((accumulator, k) => {
    return accumulator.concat(genAccumulator.map(g => g.concat(k)));
  }, []);


  return generateStringFromNumbers(numbers.slice(1), nextGetAccumulator);
}
