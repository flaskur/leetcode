/**
 * Given a binary array, find the max number of consectuive 1s in this array.
 * 
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
	let maxOnes = 0;
	let oneCounter = 0;

	nums.forEach((num) => {
		if (num === 1) {
			oneCounter += 1;
			maxOnes = Math.max(maxOnes, oneCounter);
		} else oneCounter = 0;
	});

	return maxOnes;
};
