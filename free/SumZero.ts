/**
 * Given an integer n, return any array containing n unique integers such that they dd up to 0.
 * Idea here is that if n is odd, include 0, if n is even, exclude 0. You should increment base counter from 1 and flip sign on every 2 and increment on every 2 but alternating.
 */
const sumZero = (n: number): number[] => {
	let counter = 1;
	let nums = [];

	// iterate to populate nums, but increment counter or flip sign to keep it balanced
	for (let i = 0; i < n; i++) {
		nums.push(counter);

		if (i % 2 === 0) {
			counter = counter * -1;
		} else {
			if (counter > 0) {
				counter += 1;
			} else {
				counter -= 1; // it will be negative, so pattern is 1 -1 -2 2
			}
		}
	}

	// remove the last value added and replace with 0
	if (n % 2 === 1) {
		nums.pop();
		nums.push(0);
	}

	return nums;
};
