/**
 * Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.
 * Top down recursive backtracking approach checks every combination possible and ends when total val is past target.
 * Bottom up dp approach is hazy to me. Make a dp array and init all as 0 possible ways to add up to target. Or maybe do it in reverse order so that dp array sets dp[target] to 1 and that will always be 1. Then checks target - 1 which is dp[target] + 1 if target - 1 exists. So reverse approach then... Interesting. Don't count 0 though because must be positive and distinct. Length of dp array should be target still. Write backtracking solution first.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Bottom Up DP Approach
const combinationSum4 = (nums, target) => {
	const dp = new Array(target + 1).fill(0);

	// a number can be composed of itself to make the target
	for (let num of nums) {
		if (num <= target) {
			dp[num] = 1;
		}
	}

	// iterate through each dp entry
	for (let i = 0; i <= target; i++) {
		// a number other than dp entry does not make up target, but can build up to it
		for (let num of nums) {
			if (i - num > 0) {
				dp[i] += dp[i - num];
			}
		}
	}

	return dp[target];
};

// // Top Down Recursive Backtracking Approach
// // Times out on large target and small num values even with sorted sequence memo.
// const combinationSum4 = (nums, target) => {
// 	// edge case
// 	if (target <= 0) return 0;

// 	const memo = new Map();

// 	const helper = (current, values) => {
// 		// base case
// 		if (current > target) {
// 			return 0;
// 		}

// 		// base case
// 		if (current === target) {
// 			// console.log(values);
// 			return 1;
// 		}

// 		total = 0;

// 		for (let num of nums) {
// 			current += num;
// 			values.push(num);

// 			// key for memo hash map
// 			let sequence = [ ...values ].sort().join(','); // you need to delimit to avoid combining nums that shouldn't be

// 			// check if memo has sorted sequence, otherwise calculate normally
// 			if (memo.has(sequence)) {
// 				total += memo.get(sequence);
// 			} else if (current <= target) {
// 				total += helper(current, values);
// 			}

// 			// backtrack
// 			current -= num;
// 			values.pop();
// 		}

// 		// update memo for this sorted sequence
// 		let sequence = [ ...values ].sort().join(',');
// 		memo.set(sequence, total);

// 		return total;
// 	};

// 	return helper(0, []);
// };
