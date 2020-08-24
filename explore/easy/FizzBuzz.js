/**
 * Output the string representation of numbers from 1 to n. If multiple of 3, output "Fizz" instead of the number. If multiple of 5, output "Buzz" instead of number. For both, output "FizzBuzz" instead of the number.
 * Pretty easy. You just need to use an if else block or a switch statement based on the number. Use a counter variable and combined conditions. The output should be an array with the populated result as a string.
 */
const fizzBuzz = function(n) {
	// Edge cases of n < 1 should return nothing.
	if (n < 1) return null;
	let result = [];
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz');
		else if (i % 3 === 0) result.push('Fizz');
		else if (i % 5 === 0) result.push('Buzz');
		else result.push(i.toString());
	}
	return result;
};
