/**
 * In a deck of cards, each card has an integer written on it. Can you choose X >= 2 to split the deck into 1 or more groups of cards where each group has X cards and all cards have the same integer.
 * One approach would be to create a count hash map from the deck and perform modulus x where x is the minimum value for all the keys.
 */
const hasGroupsSizeX = (deck: number[]): boolean => {
	// edge case
	if (deck.length <= 1) return false;

	// build count hash map
	let countMap = new Map();
	for (let card of deck) {
		countMap.has(card) ? countMap.set(card, countMap.get(card) + 1) : countMap.set(card, 1);
	}

	// partition will exist if the modulus of the minimum value in map turns every count to 0
	let minCount: number = Infinity;
	for (let count of countMap.values()) {
		minCount = Math.min(minCount, count);
	}

	// verify that all values are divisible and hence can make a partition
	for (let partition = 2; partition <= minCount; partition++) {
		let flag = true;
		for (let count of countMap.values()) {
			// partition size didn't work, break out of inner loop and try again
			if (count % partition !== 0) {
				flag = false;
				break;
			}
		}
		if (flag === true) return true;
	}

	return false;
};

// problem is that I can't assume partition is 2 because it might be partition of 3. you could just progressively check up to and including min count, then fail
