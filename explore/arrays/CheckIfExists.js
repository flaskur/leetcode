/**
 * Given an array of integers, check if two integers exists such that n is double of m.
 * You can create a boolean hash for each number and then iterate through the list again to see if the double exists.
 * 
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = (arr) => {
	let zeroCount = 0;
	// map because integer key, not string
	let map = new Map();
	arr.forEach((num) => {
		if (num === 0) zeroCount++;
		num !== 0 && map.set(num, true);
	});

	if (zeroCount > 1) return true;

	// entries give you an array of arrays
	// for (let [ key, value ] of map.entries()) {
	// 	console.log(`${key} ${value}`);
	// }

	for (let num of arr) {
		// console.log(num);
		if (map.get(num * 2) === true) return true;
	}

	return false;
};
