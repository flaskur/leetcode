/**
 * Given an array of non negative numbers, each element represents the max jump length from that position. Determine if you can reach the last index. The last index value doesn't seem to matter at all.
 * 
 * @param {number[]} nums
 * @param {boolean}
 */
const canJump = (nums) => {
	if (nums.length === 1) return true;

	const memo = new Set(); // should be used for immediately eval failure cases

	const helper = (index) => {
		// base case
		if (index === nums.length - 1) return true;

		if (index >= nums.length) return false;

		// encountering a 0 means you cannot jump
		if (nums[index] === 0) {
			memo.add(index);
			return false;
		}

		let result = false;

		// otherwise you try jumping every length
		for (let i = index + nums[index]; i > index; i--) {
			if (memo.has(i)) continue; // already encountered
			if (i > nums.length - 1) continue;

			result = result || helper(i);
		}

		return result;
	};

	return helper(0);
};
// fails on really long values because it goes one by one, reversing doesn't work either

const canJump = (nums) => {
	const helper = (index) => {
		if (index === nums.length - 1) return true;

		let maxJump = Math.min(index + nums[index], nums.length - 1);

		for (let i = index + 1; i <= maxJump; i++) {
			if (helper(i)) return true;
		}

		return false;
	};

	return helper(0);
};

const canJump = (nums) => {
	let last = nums.length - 1;

	// working backwards, we try to reach the beginning
	for (let i = last - 1; i >= 0; i--) {
		// last value is reachable from i
		if (i + nums[i] >= last) {
			last = i;
		}
	}

	return last <= 0;
};