/**
 * Given a collection of distinct integers, return all possible permutations.
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
	let result = [];

	let helper = function(current, remaining) {
		if (remaining.length <= 0) result.push(current.slice());
		else {
			for (let i = 0; i < remaining.length; i++) {
				current.push(remaining[i]);
				helper(current.slice(), remaining.slice(0, i).concat(remaining.slice(i + 1)));
				current.pop();
			}
		}
	};

	helper([], nums);
	return result;
};

// Rewriting to understand it.
const permute = function(nums) {
	let result = [];

	// This should populate the result array with all the permutations.
	helper(result, [], nums);
	return result;
};

// Implies that the current array given is empty at first. I have an intention of having every single start possible.
const helper = function(result, current, remaining) {
	// console.log(`current is ${current}`);
	// console.log(`result is ${result}`);
	// console.log(`remaining is ${remaining}`);
	// Why use remaining? Remaining is the original array given. Are we shrinking it actively?
	// So current originally uses a slice method, meaning it should have a new piece of memory, not the same reference. Destructuring should be the same thing.
	if (remaining.length === 0) result.push([ ...current ]);
	else {
		// This entire logic is super confusing to me. You push something in, do the recursive step with that path, then remove it? Also some confusion with shallow/deep copy. A deep copy is the same thing but different reference. A shallow copy is a variable that points to the same space in memory.
		for (let i = 0; i < remaining.length; i++) {
			current.push(remaining[i]);
			// Notice it passes a deep copy, not the same reference. This is likely because we don't want it messing with the other function calls.
			// I don't think you can do a pure concatenation with + for arrays. You should destructure it or use a concatenation.
			helper(result, [ ...current ], [ ...remaining.slice(0, i), ...remaining.slice(i + 1) ]);
			current.pop();
		}
	}
};

// Okay, think of it like this. We go through it normally first and then it gets added to the results array and finishes. Before that is was [1, 2, 3] before calling helper. After adding it gets popped and turned into [1, 2] but remaining is already done. Okay consider first path of [1] then it adds 2 into [1,2]. Helper is called so current and remaining is only 3 and you get the path outlined already. After [1,2] finishes it becomes [1] again. Then it adds into [1,3] and you go down the [1,3,2] path. Ahh, okay. I kinda get it now.
// Backtracing is basically the pattern where you want every single permutation. That can be done by iterating and pushing a possible remaining number. Then we pop so we consider everything. It's kinda hard to understand. The concept is repetitive for the recursive part anyways.
