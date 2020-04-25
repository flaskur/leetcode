/**
 * Distribute some number of candies to a row of n people. Give 1 candy to the first, 2 to the second, ..., n to the last. Go to the start and do n + 1 to the first, n + 2 tot he second, ..., 2n to the last. Do this until we run out. Return an array that represents the final distribution of candies.
 * 
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
const distributeCandies = (candies, num_people) => {
	let distro = new Array(num_people).fill(0);

	let index = 0;
	let candyAmount = 1;

	while (candies > 0) {
		if (candies >= candyAmount) {
			distro[index] += candyAmount;
			candies -= candyAmount;
		} else {
			distro[index] += candies;
			candies = 0;
			break;
		}

		candyAmount += 1;
		index = (index + 1) % num_people;
	}

	return distro;
};

// Distribute candies is just sequential assignment until not enough.
