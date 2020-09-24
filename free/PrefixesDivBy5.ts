/**
 * Given an array of 0s and 1s, interpret it as a binary number. Return a list of booleans if the subarray binary representation is divisible by 5.
 */
const prefixesDivBy5 = (A: number[]): boolean[] => {
	let div: boolean[] = [];
	let remainder = 0;

	for (let i = 0; i < A.length; i++) {
		// value is doubled, but realize that remainder also behave the same
		if (A[i] === 0) {
			remainder = (remainder * 2) % 5;
		}
		// value is doubled + 1
		if (A[i] === 1) {
			remainder = (remainder * 2 + 1) % 5;
		}

		if (remainder === 0) {
			div.push(true);
		} else {
			div.push(false);
		}
	}

	return div;
};

// max number representation overflows
// you have to realize that adding a number to the right is just a left shift which equates to doubling the value if 0.
// for (let i = 0; i < A.length; i++) {
// 	let num = parseInt(A.slice(0, i + 1).join(''), 2);
// 	console.log(num);

// 	num % 5 === 0 ? div.push(true) : div.push(false);

// 	if (num % 5 === 0) {
// 		console.log(num, 'div by 5');
// 		div.push(true);
// 	} else {
// 		console.log(num, 'not div by 5');
// 		div.push(false);
// 	}
// }
