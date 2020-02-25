/**
 * Given an array of non-negative integers, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index.
 * So if all the other elements converge at a zero point then you definitely can't reach the end. You would probably need to check each case and see if it can read the end by modifying the jump length. Doesn't that mean the last index is not really used at all?
 * For this I would do a recursive solution that goes through all the jump cases.
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
	// Edge cases
	if (nums.length === 0) return null;
	return helper(nums, 0);
};

const helper = function(nums, index) {
	// Base case is when the current index is equal to the last index, meaning we have reached it.
	if (index === nums.length - 1) return true;

	// Recursively call each possible index iteration.
	let maxJump = nums[index];
	for (let i = 1; i <= maxJump; i++) {
		let result = helper(nums, index + i);
		if (result === true) return true;
	}

	return false;
	// Bit confused about the return logic. If I return inside of that for loop, it doesn't really do anything. But I need to check every possible case and see if any of them are true which means that I have to store it right? So the recursive call must finish first since it's synchronous code. If it fails, then it returns false and that's the end of it?

	// Time limit issue for excessively large input. I can't do a for loop for each case, but that's the only way it check everything.
};

// Alternate recursive backtracking.
const canJump = function(nums) {
	return helper(nums, 0);
};

const helper = function(nums, position) {
	if (position === nums.length - 1) return true;

	let maxJump = Math.min(position + nums[position], nums.length - 1);
	for (let nextPosition = position + 1; nextPosition <= maxJump; nextPosition++) {
		if (helper(nums, nextPosition)) return true;
	}

	return false;
};

// Memoization
const canJump = function(nums) {
	let memo = new Array(nums.length);
	memo.fill('U');
	memo[nums.length - 1] = 'G';
	// console.log(memo);
	return helper(nums, 0, memo);
};

const helper = function(nums, position, memo) {
	if (memo[position] != 'U') {
		return memo[position] === 'G' ? true : false;
	}

	let maxJump = Math.min(position + nums[position], nums.length - 1);
	for (let nextPosition = position + 1; nextPosition <= maxJump; nextPosition++) {
		if (helper(nums, nextPosition, memo)) {
			memo[nextPosition] = 'G';
			return true;
		}
	}

	memo[position] = 'B';
	return false;
	// How does this even help? Sure we do memoization but at that point we would have already returned an answer.
	// Actually no, memoization is effective here because we actually do have to do the same operation over and over again. Remember that we are still stepping through each one individually. I think the most effective part is that on failure you mark 'B' for bad which means it doesn't go through the whole for loop operation because we've done it already. The G memoization seems redundant though because at that point we would have returned true and found a correct path.
};

// Solved using a couple time inefficient recursive backtracking methods, then adding memoization to skip the bad cases that are dead ends.

// Iterative Approach.
const canJump = function(nums) {
	let memo = new Array(nums.length).fill('U');
	memo[nums.length - 1] = 'G';

	for (let i = nums.length - 2; i >= 0; i--) {
		let maxJump = Math.min(i + nums[i], nums.length - 1);

		for (let j = i + 1; j <= maxJump; j++) {
			if (memo[j] === 'G') {
				memo[i] = 'G';
				break;
			}
		}
	}

	return memo[0] === 'G';
};
// This works by going in reverse order and using memoization. So you start off at the index before the last one. You calculate the maxJump in the same fashion by adding index and element given. Then you iterate through the indices and check if they are marked as good yet, if so then we break out of the inner loop. The important thing is that the last index is already set to G meaning that the first G will result from tracing to there. You work backwards basically.
