/**
 * Given the array candies and integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
 * For each kid check if there is a way to distribute extraCandies among kids such that they can have the greatest num of candies among them.
 * The prompt is overcomplicating a simple concept. Basically you find the max value and iterate through the array to see if it can reach the max value.
 * 
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
	let max = -1;

	candies.forEach((candy) => {
		max = Math.max(max, candy);
	});

	for (let i = 0; i < candies.length; i++) {
		if (candies[i] + extraCandies >= max) {
			candies[i] = true;
		} else candies[i] = false;
	}

	return candies;
};

const kidsWithCandies = (candies, extraCandies) => {
	const max = Math.max(...candies);

	return candies.map((candy) => candy + extraCandies >= max);
};
