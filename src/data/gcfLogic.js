function lcmTwoNumbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
   return false;
 return (!x || !y) ? 0 : Math.abs((x * y) / getGCFTwoNumbers(x, y));
}

function generateLCMQuestionNums(min, max) {
  const lcmNum1 = generateRandomNumber(min, max);
  let lcmNum2 = generateRandomNumber(min, max)
  while (lcmNum1 === lcmNum2) {
    lcmNum2 = generateRandomNumber(min, max);
  }
  return [lcmNum1, lcmNum2];
}

function getGCFTwoNumbers(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function generateGcfNumbers(min, max) {
  let questionNums = [];
  while (questionNums.length < 2) {
    let num1 = generateRandomNumber(min, max);
    let num2 = generateRandomNumber(min, max);
    if (getGCFTwoNumbers(num1, num2) > 1 && num1 !== num2) {
      questionNums.push(num1);
      questionNums.push(num2);
    }
  }
  return questionNums;
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {lcmTwoNumbers, generateLCMQuestionNums, getGCFTwoNumbers, generateGcfNumbers, };
