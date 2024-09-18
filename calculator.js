const readlineSync = require('readline-sync');

function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return 'Error: Division by zero is not allowed';
      }
      return num1 / num2;
    
    default:
      return 'Error: Invalid operator!';
  }
}

function getOperatorInput() {
  const validOperators = ['+', '-', '*', '/'];
  let operator = readlineSync.question('What operation would you like to perform? (+, -, *, /):');

  while (!validOperators.includes(operator)) {
    console.log('That is not a valid operation');
    operator = readlineSync.question('What operation would you like to perform? (+, -, *, /):');
  }

  return operator;
}

function getNumberInput(promptText) {
  let isValid = false;
  let num;

  while (!isValid) {
    num = readlineSync.question(promptText);
    
    if (!isNaN(num) && num.trim() !== '') {
      isValid = true;
    } else {
      console.log('This is not a number');
    }
  }
  return parseFloat(num);
}

function main() {
  const operator = getOperatorInput();
  
  const num1 = getNumberInput('Enter the first number: ');

  const num2 = getNumberInput('Enter the second number: ');

  const result = calculate(num1, num2, operator);

  console.log(`The result is: ${result}`);
}

main();
