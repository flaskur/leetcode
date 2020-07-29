/**
 * Given an array of numbers with even number of elements in form [x1,x2,xn,y1,y2,yn] return the arr in the form [x1,y1,x2,y2,xn,yn]
 * Just from a cursory look, it seems like I just need to split the arr in half and add to a new array not in place. I was overthinking it.
 * 
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
// Split the left and right sides of the array, then populate a new arr by index.
const shuffle = (nums, n) => {
	// Just brute force first.
	let leftArr = nums.slice(0, nums.length / 2);
	let rightArr = nums.slice(nums.length / 2, nums.length);

	let shuffledArr = [];

	for (let i = 0; i < leftArr.length; i++) {
		shuffledArr.push(leftArr[i]);
		shuffledArr.push(rightArr[i]);
	}

	return shuffledArr;
};

// Don't create left and right arr, instead use modulus index to add from correct index.
const shuffle = (nums, n) => {
	// if new Array(2*n), don't use push, use index write instead, otherwise 2n empty spaces.
	let resultArr = [];
	console.log(resultArr.length);

	for (let i = 0; i < nums.length; i++) {
		// i/2 because i goes to nums.length but we only want left side, n + i/2 because n is deplacement to the rightside since it's exactly half.
		let val = i % 2 === 0 ? nums[i / 2] : nums[n + Math.floor(i / 2)];
		resultArr.push(val);
	}

	return resultArr;
};

shuffle([ 2, 5, 1, 3, 4, 7 ], 3);
