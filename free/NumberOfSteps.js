/**
 * Given a non negative integer num, return the number of steps to reduce it to zero if you divide by 2 on even and subtract 1 on odd.
 * Dividing an even number by 2 can yield an even or odd. Subtracting 1 from an odd always yields an even.
 * Number of iterations is unknown so use a while loop until the value is 0 and keep a counter.
 * 
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = (num) => {
	let counter = 0;

	while (num !== 0) {
		if (num % 2 === 0) num /= 2;
		else num -= 1;
		counter += 1;
	}

	return counter;
};
