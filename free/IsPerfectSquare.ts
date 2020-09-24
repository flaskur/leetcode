/**
 * Given a positive integer num, write a function that returns true if num is a perfect square. You can't use sqrt function.
 * One approach would be to iterate starting from 1 and square that value until it becomes it, or it surpasses it. Probably not efficient though. 
 */
const isPerfectSquare = (num: number): boolean => {
	// edge case
	if (num === 1) return true;

	let counter = 1;

	while (counter * counter < num) {
		counter += 1;

		if (counter * counter === num) return true;
		else if (counter * counter > num) return false;
	}

	return false;
};
