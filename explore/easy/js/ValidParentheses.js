/**
 * Given a string containing only characters (){}[], determine if the input string is valid. It is valid if open bracket is closed by the same type of bracket and open brackets are closed in the same order.
 * A trivial check would be to populate a hash with those characters and see if the character count matches. That however doesn't solve the proper ordering problem.
 * We could put it into an array and work from both ends. 
 * I'm going to make an assumption and say that the parentheses match can only be right next to each other, or completely external.
 * 
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
	let parens = [ ...s ];
	console.log(parens);

	while (parens.length > 0) {
		if (
			(parens[0] === '(' && parens[1] === ')') ||
			(parens[0] === '{' && parens[1] === '}') ||
			(parens[0] === '[' && parens[1] === ']')
		) {
			parens.shift();
			parens.shift();
			console.log(`Front removal, arr now ${parens}`);
		} else if (
			(parens[parens.length - 2] === '(' && parens[parens.length - 1] === ')') ||
			(parens[parens.length - 2] === '{' && parens[parens.length - 1] === '}') ||
			(parens[parens.length - 2] === '[' && parens[parens.length - 1] === ']')
		) {
			parens.pop();
			parens.pop();
			console.log(`Back removal, arr now ${parens}`);
		} else if (
			(parens[0] === '(' && parens[parens.length - 1] === ')') ||
			(parens[0] === '{' && parens[parens.length - 1] === '}') ||
			(parens[0] === '[' && parens[parens.length - 1] === ']')
		) {
			parens.shift();
			parens.pop();
			console.log(`External removal, arr now ${parens}`);
		} else {
			console.log('No case found, return false');
			return false;
		}
	}

	console.log('array is empty, return true');
	return true;
};

// I don't have a way to handle when it's completely enclosed as two parts. If I could split it then yes, but that kinda defeats the purpose. I'm probably overthinking this thing.

// This time you just use a stack data structure represented by an array and operating DURING the populating of the stack. Success is based on whether or not stack is empty at the end.
const isValid = function(s) {
	let stack = [];
	for (let char of s) {
		stack.push(char);

		if (
			(stack[stack.length - 2] === '(' && stack[stack.length - 1] === ')') ||
			(stack[stack.length - 2] === '{' && stack[stack.length - 1] === '}') ||
			(stack[stack.length - 2] === '[' && stack[stack.length - 1] === ']')
		) {
			stack.pop();
			stack.pop();
		}
	}

	return stack.length === 0 ? true : false;
};

// So you just had to know that the stack data structure is extremely appropriate for this operation. The initial I had only handles simple cases, but not ones where they are divided into distinct sections.
