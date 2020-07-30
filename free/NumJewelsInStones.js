/**
 * Given string J distinct, find how many jewels are in string S stones, case sensitive.
 * You would need to effectively iterate through the stones and check if they are a jewel.
 * Create a hash map of the jewels and iterate through each stone and increment a counter.
 * 
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => {
	let jewelCount = 0;

	let jewelMap = new Map();
	for (let jewel of J) {
		console.log(jewel);
		jewelMap.set(jewel, true);
	}

	for (let stone of S) {
		jewelMap.get(stone) && jewelCount++;
	}

	return jewelCount;
};
