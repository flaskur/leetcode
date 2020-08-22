/**
 * You have n coins that you want to form a staircase shape.
 * Given n, find the total number of full staircase rows that can be formed.
 * So the markers for each row are essentially just n + 1 each time. Continue to subtract from n until the row is complete or becomes -1, each iteration should increase the row length. Increment the completed staircases on success.
 * 
 * @param {number} n
 * @param {number}
 */
const arrangeCoins = (n) => {
	let completedStairs = 0;
	let rowLength = 1;

	while (true) {
		n -= rowLength;
		rowLength++;

		if (n >= 0) completedStairs++;
		else break;
	}

	return completedStairs;
};
