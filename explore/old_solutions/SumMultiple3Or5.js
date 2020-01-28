// Code Wars
// So the idea here is that we have a number and loop through all possible entries that are multiples of 3 or 5.
// Then we need to sum them all. So you could use a for loop and collect a total.
// @param {number} number is the upper bound that you want to check all numbers less than.
// Any edge cases? If given a negative number, we get a 0 sum.
function solution(number) {
	console.log(number);
	let sum = 0;

	for (let num = 1; num < number; num++) {
		if (num % 3 === 0 || num % 5 === 0) {
			sum += num;
		}
	}

	console.log('the sum of all multiples is', sum);

	return sum;
}

// Server issue when submitting. Other than that it's fine.
