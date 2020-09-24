/**
 * Given a non negative number c, decide whether there are two integers a and b such that a^2 + b^2 = c.
 */
const judgeSquareSum = (c: number): boolean => {
	let squares = new Set<number>();

	// i ranges from 0 to sqrt(c) because if one num is 0, other num must be sqrt(c) exactly
	for (let i = 0; i <= Math.sqrt(c); i++) {
		// check if the difference is in hash set
		let target = c - i * i;
		if (squares.has(target) || target == i * i) return true;

		// otherwise add it to hash set
		squares.add(i * i);
	}

	return false;
};
