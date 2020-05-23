/**
 * Collection of stones that have some positive integer weight. Every turn, take two stones and smash together. Always x <= y. If both stones equal, both destroyed. If not equal, x (smaller one) is destroyed and y has new weight of y - x. End result is 0 or 1 stones left.
 * Seems like a dynamic programming problem. We need to recursively check each possible track until the base case of stones.length === 1 or stones.length === 0.
 * 
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeightII = (stones) => {
	let cache = new Map();

	const helper = (index, sum) => {
		let mapKey = index + '-' + sum;

		if (index === stones.length) return sum;

		if (cache.has(mapKey)) return cache.get(mapKey);

		let stoneOne = helper(index + 1, sum + stones[index]);
		let stoneTwo = helper(index + 1, sum - stones[index]);

		let min = Math.min(Math.abs(stoneOne), Math.abs(stoneTwo));
		return min;
	};

	return helper(0, 0);
};
