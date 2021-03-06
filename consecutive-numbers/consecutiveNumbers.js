// given a sorted array of integers,
// return a string with a dash replacing the consecutive numbers

// example: [1, 2, 3, 5, 6, 7, 9, 10, 11, 15] => [1-3, 5-7, 9-11, 15]

function checkIfConsecutive(num1, num2) {
  return num1 === num2 - 1;
}

function checkIfStringExists(consecutiveString) {
  return consecutiveString.length > 0;
}

function checkIfLast(num, numberArray) {
  return num === numberArray[numberArray.length - 1];
}

function getConsecutiveNumbers(inputArray) {
  let resultString = "";
  let consecutiveString = "";
  for (let i = 0; i < inputArray.length; i++) {
    let firstNumber = inputArray[i];
    let secondNumber = inputArray[i + 1];
    if (checkIfConsecutive(firstNumber, secondNumber)) {
      if (!checkIfStringExists(consecutiveString)) {
        consecutiveString += firstNumber + "-";
      }
    } else {
      resultString += consecutiveString + firstNumber;
      if (!checkIfLast(firstNumber, inputArray)) {
        resultString += ", ";
      }
      consecutiveString = "";
    }
  }
  return resultString;
}

console.log(getConsecutiveNumbers([1, 2, 3, 5, 6, 7, 9, 10, 11, 15]));
