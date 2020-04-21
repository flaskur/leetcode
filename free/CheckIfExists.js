/**
 * Given an array arr of integers, check if there exists two integers N and M such that N is double of M.
 * The niave approach would be a double for loop that checks every single pair. It's the same methodology as selection sort. Instead I can do one iteration to populate a boolean hash, then I can do another iteration and check if the doubled value exists.
 * 
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = (arr) => {
	let booleanHash = new Map();
	let zeroCount = 0;

	arr.forEach((num) => {
		num === 0 && zeroCount++;
		// if it doesn't already exist, put it into the map
		!booleanHash.get(num) && num !== 0 && booleanHash.set(num, true);
	});

	if (zeroCount > 1) return true;

	// iterate again and check if the double exists in the hash.
	for (let num of arr) {
		if (booleanHash.get(num * 2) === true) {
			console.log(num);
			return true;
		}
	}

	return false;
};

// Using the hash map is a valid option, but you have to handle the special case of 0 because the double of 0 is also 0. Essentially the problem is that 0 will invoke itself and return a wrong answer. To solve this you need to handle the zero count separately and if there are at least 2 zeros, then immediately return true.
