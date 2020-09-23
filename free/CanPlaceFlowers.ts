/**
 * Given a flowerbed represented as an array containing 0 and 1 where 0 is empty and 1 is not, return the number of new flowers that can be planted without violating the adjacent rule.
 * For the normal case, you can just iterate through the entire array and check i-1 and i+1 indices to see if they are 0. However, you would have to check start and end separately to avoid out of bound error.
 */
const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
	// edge case
	if (flowerbed.length === 1) {
		if (flowerbed[0] === 1) return n === 0;
		if (flowerbed[0] === 0) return n <= 1;
	}

	// counter
	let newFlowers = 0;

	// iterate and changed values to 1 if neighbors are 0
	for (let i = 0; i < flowerbed.length; i++) {
		// skip iteration because you can't place a flower in non empty place
		if (flowerbed[i] === 1) {
			continue;
		}

		// must handle first and last case separately
		if (i === 0) {
			if (flowerbed[i + 1] === 0) {
				newFlowers += 1;
				flowerbed[i] = 1; // mutate
			}
		} else if (i === flowerbed.length - 1) {
			if (flowerbed[i - 1] === 0) {
				newFlowers += 1;
				flowerbed[i] = 1;
			}
		} else {
			// general case, check left and right
			if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
				newFlowers += 1;
				flowerbed[i] = 1;
			}
		}

		if (newFlowers >= n) {
			return true;
		}
	}

	return false;
};
