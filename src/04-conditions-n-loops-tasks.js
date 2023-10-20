/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  if ((a + b) > c && (a + c) > b && (b + c) > a) {
    return true;
  }
  return false;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const top1 = rect1.top;
  const bottom1 = top1 + rect1.height;
  const left1 = rect1.left;
  const right1 = left1 + rect1.width;
  const top2 = rect2.top;
  const bottom2 = top2 + rect2.height;
  const left2 = rect2.left;
  const right2 = left2 + rect2.width;
  const top2InRect1 = top2 >= top1 && top2 <= bottom1;
  const top1InRect2 = top1 >= top2 && top1 <= bottom2;
  const bottom2InRect1 = bottom2 >= top1 && bottom2 <= bottom1;
  const bottom1InRect2 = bottom1 >= top2 && bottom1 <= bottom2;
  const left2InRect1 = left2 >= left1 && left2 <= right1;
  const left1InRect2 = left1 >= left2 && left1 <= right2;
  const right2InRect1 = right2 >= left1 && right2 <= right1;
  const right1InRect2 = right1 >= left2 && right1 <= right2;
  if (top2InRect1 && left2InRect1) { return true; }
  if (top1InRect2 && left1InRect2) { return true; }
  if (top2InRect1 && right2InRect1) { return true; }
  if (top1InRect2 && right1InRect2) { return true; }
  if (bottom2InRect1 && left2InRect1) { return true; }
  if (bottom1InRect2 && left1InRect2) { return true; }
  if (bottom2InRect1 && right2InRect1) { return true; }
  if (bottom1InRect2 && right1InRect2) { return true; }
  return false;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const a = point.x - circle.center.x;
  const b = point.y - circle.center.y;
  const c = Math.sqrt((a ** 2) + (b ** 2));
  if (c < circle.radius) { return true; }
  return false;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    const element = str[i];
    if (str.indexOf(element) === str.lastIndexOf(element)) { return element; }
  }
  return null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let start;
  let end;
  if (isStartIncluded) { start = '['; }
  if (!isStartIncluded) { start = '('; }
  if (isEndIncluded) { end = ']'; }
  if (!isEndIncluded) { end = ')'; }
  if (a > b) { return `${start}${b}, ${a}${end}`; }
  return `${start}${a}, ${b}${end}`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  const arr = str.split('');
  return arr.reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  const str = String(num);
  const arr = str.split('');
  return Number(arr.reverse().join(''));
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const arr = String(ccn).split('');
  const checkDigit = parseInt(arr[arr.length - 1], 10);
  const payload = arr.slice(0, -1).reverse();
  const newArr = [];
  for (let i = 0; i < payload.length; i += 1) {
    if (i % 2 === 0) {
      newArr.push((Number(payload[i]) * 2).toString(10));
    } else {
      newArr.push(payload[i]);
    }
  }
  const arr1 = newArr.map((item) => {
    if (item.length === 2) {
      return parseInt(item[0], 10) + parseInt(item[1], 10);
    }
    return parseInt(item, 10);
  });
  const sumEl = arr1.reduce((acc, val) => acc + val, 0);
  const check = 10 - (sumEl % 10);
  if (check === checkDigit) { return true; }
  return false;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  if (num <= 9) { return num; }
  const str = String(num);
  const arr = str.split('');
  const arrNum = arr.map((item) => parseInt(item, 10));
  const sum = arrNum.reduce((acc, val) => acc + val, 0);
  return getDigitalRoot(sum);
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const arr = str.split('');
  const openBrackets = ['[', '(', '{', '<'];
  const closeBrackets = [']', ')', '}', '>'];
  const stack = [];
  if (arr.length % 2 !== 0) { return false; }
  for (let i = 0; i < arr.length; i += 1) {
    if (openBrackets.includes(arr[i])) {
      stack.push(arr[i]);
    }
    if (closeBrackets.indexOf(arr[i]) > -1) {
      const index = closeBrackets.indexOf(arr[i]);
      if (openBrackets.indexOf(stack[stack.length - 1]) === index) {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const sortPathes = pathes.sort((a, b) => a.length - b.length);
  const shortPath = sortPathes.shift();
  const arrShortPath = shortPath.split('/');
  const matrixPathes = sortPathes.map((item) => item.split('/'));
  const congruenceItems = [];
  for (let i = 0; i < arrShortPath.length; i += 1) {
    let tempArr = [];
    for (let j = 0; j < sortPathes.length; j += 1) {
      if (arrShortPath[i] === matrixPathes[j][i]) {
        tempArr.push(arrShortPath[i]);
      }
    }
    if (tempArr.length === sortPathes.length) {
      congruenceItems.push(tempArr);
    } else { break; }
    tempArr = [];
  }
  const uniqItems = congruenceItems.map((item) => item[0]);
  if (uniqItems.length === 0) { return ''; }
  if (uniqItems.length === 1 && uniqItems[0] === '') { return '/'; }
  if (uniqItems.length === 1 && uniqItems[0] !== '') { return uniqItems[0]; }
  if (uniqItems.length > 1 && uniqItems[uniqItems.length - 1].includes('.')) { return uniqItems.join('/'); }
  return `${uniqItems.join('/')}/`;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const resultMatrix = [];
  for (let i = 0; i < m1.length; i += 1) {
    let itemMatrix = [];
    for (let k = 0; k < m1.length; k += 1) {
      let sum = 0;
      for (let j = 0; j < m1[0].length; j += 1) {
        sum += (m1[i][j] * m2[j][k]);
      }
      itemMatrix.push(sum);
    }
    resultMatrix.push(itemMatrix);
    itemMatrix = [];
  }
  return resultMatrix;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(/* position */) {
  throw new Error('Not implemented');
  /* const position1 = [];
  for (let i = 0; i < position.length; i += 1) {
    let itemPos = [];
    for (let j = 0; j < position[0].length; j += 1) {
      itemPos.push(position[j][i]);
    }
    position1.push(itemPos);
    itemPos = [];
  }
  const diag = [];
  for (let i = 0; i < position.length; i += 1) {
    diag.push(position[i][i]);
  }

  const sideDiag = [];
  let col = 3;
  let row = 0;
  while ((col > -1) && (row < 3)) {
    sideDiag.push(position[row += 1][col -= 1]);
  }

  function horizontalSearch(matrix, val) {
    const resultArr = matrix.find((item) => {
      item[0] === item[1] && item[0] === item[2] && item[0] === val;
    });
    if (resultArr) { return resultArr[0]; }
    return undefined;
  }

  function diagonalSerch(arr, val) {
    if (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] === val) { return val; } return undefined;
  }

  const a = horizontalSearch(position, 'X');
  const b = horizontalSearch(position, '0');
  const c = horizontalSearch(position1, 'X');
  const d = horizontalSearch(position1, '0');
  const e = diagonalSerch(diag, 'X');
  const f = diagonalSerch(diag, '0');
  const g = diagonalSerch(sideDiag, 'X');
  const h = diagonalSerch(sideDiag, '0');

  const arr = [a, b, c, d, e, f, g, h];

  if (arr.some((i) => i === 'X')) { return 'X'; }
  if (arr.some((i) => i === '0')) { return '0'; }
  return undefined; */
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
