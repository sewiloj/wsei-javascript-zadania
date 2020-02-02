class Calculator {
	constructor() {
		this.history = [];
	}
};

Calculator.prototype.add = function(num1, num2) {
	let result = num1 + num2;
	this.history.push(`added ${num1} to ${num2} got ${result}`);
	return result;
};

Calculator.prototype.multiply = function(num1, num2) {
	let result = num1 * num2;
	this.history.push(`multiplied ${num1} with ${num2} got ${result}`);
	return result;
};

Calculator.prototype.substract = function(num1, num2) {
	let result = num1 - num2;
	this.history.push(`substracted ${num1} from ${num2} got ${result}`);
	return result;
};

Calculator.prototype.divide = function(num1, num2) {
	if (num2 === 0) {
		throw new Error('You cannot divide by 0!');
	}
	let result = num1 / num2;
	this.history.push(`dividied ${num1} by ${num2} got ${result}`);
	return result;
};

const calculator = new Calculator;
const add = calculator.add(10, 5);
const mul = calculator.multiply(3, 5);
const sub = calculator.substract(20, 15);
const div = calculator.divide(20, 2);

console.log(add, mul, sub, div, calculator.history);