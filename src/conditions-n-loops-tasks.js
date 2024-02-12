/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = null;
  if (a > b && a > c) {
    max = a;
  } else if (b > a && b > c) {
    max = b;
  } else {
    max = c;
  }

  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return (
    !(a + b < c) &&
    !(b + c < a) &&
    !(c + a < b) &&
    !!a &&
    !!b &&
    !!c &&
    (a === b || a === c || b === c || b === a || c === a || c === b)
  );
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let numCurrent = num;
  const valueArabick = [10, 9, 5, 4, 1];
  const valueRimskie = ['X', 'IX', 'V', 'IV', 'I'];
  let ans = '';
  for (let indexI = 0; indexI < 5; indexI += 1) {
    while (valueArabick[indexI] <= numCurrent) {
      ans += valueRimskie[indexI];
      numCurrent -= valueArabick[indexI];
    }
  }
  return ans;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let ans = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '1':
        ans += 'one';
        break;
      case '2':
        ans += 'two';
        break;
      case '3':
        ans += 'three';
        break;
      case '4':
        ans += 'four';
        break;
      case '5':
        ans += 'five';
        break;
      case '6':
        ans += 'six';
        break;
      case '7':
        ans += 'seven';
        break;
      case '8':
        ans += 'eight';
        break;
      case '9':
        ans += 'nine';
        break;
      case '0':
        ans += 'zero';
        break;
      case '-':
        ans += 'minus';
        break;
      case '.':
        ans += 'point';
        break;
      case ',':
        ans += 'point';
        break;
      default:
        break;
    }
    if (numberStr.length !== 1 && i !== numberStr.length - 1) {
      ans += ' ';
    }
  }
  return ans;
}
/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let ans = true;
  for (let index = 0; index < Math.floor(str.length / 2); index += 1) {
    if (str[index] !== str[str.length - 1 - index]) {
      ans = false;
      break;
    }
  }
  return ans;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let ans = -1;
  for (let index = 0; index < str.length; index += 1) {
    const element = str[index];
    if (element === letter) {
      ans = index;
      break;
    }
  }
  return ans;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let ans = false;
  let temp = num;
  do {
    if (temp % 10 === digit) {
      ans = true;
      break;
    }
    temp = Math.floor(temp / 10);
  } while (temp > 0);
  return ans;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let totalSum = 0;
  let currentSum = 0;
  let ans = -1;
  for (let index = 0; index < arr.length; index += 1) {
    const element = arr[index];
    totalSum += element;
  }
  for (let index = 0; index < arr.length; index += 1) {
    const element = arr[index];
    if (totalSum - currentSum - element === currentSum) {
      ans = index;
      break;
    }
    currentSum += element;
  }
  return ans;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const ans = new Array(size);
  for (let indexI = 0; indexI < size; indexI += 1) {
    const temp = new Array(size);
    for (let indexJ = 0; indexJ < size; indexJ += 1) {
      temp[indexJ] = 0;
    }
    ans[indexI] = temp;
  }
  let current = 1;
  let moveRows = 0;
  let moveColumns = 1;
  let x = 0;
  let y = -1;
  while (current <= size ** 2) {
    if (
      x + moveRows >= 0 &&
      x + moveRows < size &&
      y + moveColumns >= 0 &&
      y + moveColumns < size &&
      ans[x + moveRows][y + moveColumns] === 0
    ) {
      x += moveRows;
      y += moveColumns;
      ans[x][y] = current;
      current += 1;
    } else if (moveColumns === 1) {
      moveColumns = 0;
      moveRows = 1;
    } else if (moveRows === 1) {
      moveRows = 0;
      moveColumns = -1;
    } else if (moveColumns === -1) {
      moveColumns = 0;
      moveRows = -1;
    } else if (moveRows === -1) {
      moveRows = 0;
      moveColumns = 1;
    }
  }
  return ans;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const n = matrix.length;
  const tempArray = new Array(n);
  tempArray.fill(0);
  for (let indexJ = 0; indexJ < n; indexJ += 1) {
    tempArray[indexJ] = new Array(n);
    tempArray[indexJ].fill(0);
  }
  const ans = tempArray;

  for (let indexI = 0; indexI < n; indexI += 1) {
    for (let indexJ = 0; indexJ < n; indexJ += 1) {
      tempArray[indexI][indexJ] = matrix[indexI][indexJ];
    }
  }

  for (let indexI = 0; indexI < n; indexI += 1) {
    for (let indexJ = n - 1; indexJ >= 0; indexJ -= 1) {
      ans[indexI][n - indexJ - 1] = tempArray[indexJ][indexI];
    }
  }
  return ans;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const tempArray = arr;
  const n = tempArray.length;
  for (let i = 0; i < n; i += 1) {
    const v = tempArray[i];
    let j = i - 1;
    while (j >= 0 && tempArray[j] > v) {
      tempArray[j + 1] = tempArray[j];
      j -= 1;
    }
    tempArray[j + 1] = v;
  }
  return tempArray;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(/* str, iterations */) {
  throw new Error('Not implemented');
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  if (number <= 11) {
    return number;
  }

  const lengthNumber = Math.ceil(Math.log10(number + 0.001));
  const array = new Array(lengthNumber);
  for (let indexI = 0; indexI < lengthNumber; indexI += 1) {
    array[indexI] = Math.floor(number / 10 ** (lengthNumber - indexI - 1)) % 10;
  }
  let i = array.length - 1;
  while (i > 0 && array[i - 1] >= array[i]) {
    i -= 1;
  }

  let j = array.length - 1;
  while (array[j] <= array[i - 1]) {
    j -= 1;
  }
  [array[i - 1], array[j]] = [array[j], array[i - 1]];
  j = array.length - 1;
  while (i < j) {
    [array[i], array[j]] = [array[j], array[i]];
    i += 1;
    j -= 1;
  }
  let answer = 0;
  for (let indexI = 0; indexI < lengthNumber; indexI += 1) {
    answer += array[indexI] * 10 ** (lengthNumber - indexI - 1);
  }
  return answer;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
