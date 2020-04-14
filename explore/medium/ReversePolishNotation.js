/**
 * Evaluate the value of an arithmetic express in RPN.
 * Continue to push onto the stack data structure and if you encounter an arithmetic operation, pop twice and push the result back into the stack. Requires just one iteration.
 * 
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens) {
	let stack = [];

	tokens.forEach((token) => {
		// valid number
		if (!isNaN(parseInt(token, 10))) {
			stack.push(token);
		} else {
			switch (token) {
				case '+':
					stack.push(parseInt(stack.pop(), 10) + parseInt(stack.pop(), 10));
					break;
				case '-':
					stack.push(-(parseInt(stack.pop(), 10) - parseInt(stack.pop())));
					break;
				case '*':
					stack.push(parseInt(stack.pop(), 10) * parseInt(stack.pop(), 10));
					break;
				case '/':
					let divisor = parseInt(stack.pop(), 10);
					let dividend = parseInt(stack.pop(), 10);
					stack.push(Math.trunc(dividend / divisor));
					break;
				default:
			}
		}
	});

	return parseInt(stack[0], 10);
};
