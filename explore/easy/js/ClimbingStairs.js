/**
 * Climbing a set of stairs, it takes n steps to reach the top. You can either climb 1 or 2 steps, how many ways can you climb to the top?
 * Remember that dynamic programming problems are breaking down a larger problem into multiple subproblems.
 * For an input of 2, there is only two options, 1 + 1 or 2. Consider it a base case?
 * For an input of 3, there are 3 options, 1 + 1 + 1, 2 + 1, or 1 + 2.
 * For an input of 4, can I break it down into two inputs of 2? 1+1+1+1, 2+1+1, 1+2+1, 1+1+2, 2+2. So there's 5 options for that. How do I break it down into subproblems?
 * To reach the nth step, my previous steps could have been 1,2,3. Step sizes?
 * 
 * For n = 3, it's composed of n = 1 and n = 2 case. Okay...
 * For n = 4, it's composed of the n = 2 and n = 3 case because you can get to n = 4 in one or two steps using the subproblem from n = 3 and n = 2. That's the point, you had to know that going from any particular step is the sum of the last two steps. You only know this because you can only move one or two steps at a time. Confusing. In any case, it's just a recursion problem then right?
 * 
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
	if (n === 1) return 1;
	let memo = [];

	// The number of ways to get to 0 steps is 0 right? Since we have 2 base case, it doesn't matter.
	memo[0] = 0;
	memo[1] = 1;
	memo[2] = 2;

	// So we basically find the memo answer from step n = 3 to actual n.
	for (let i = 3; i <= n; i++) {
		memo[i] = memo[i - 1] + memo[i - 2];
	}

	return memo[n];
};

// const helper = function(i, n, memo) {
//   // Denotes index greater than num elements?
//   if (i > n) return 0;

//   if (i === n) return 1;

//   if (memo[i] > 0) return memo[i];

//   memo[i] = helper(i + 1, n, memo) + helper(i + 2, n, memo);

//   return memo[i];

//   // What happens here? If the i value is n, then it returns 1? Does that mean step is 1?
// };

// Pure recursion fails this problem because it times out with large enough n because you are splitting it too many times and you aren't memoization the calculations that you have already done. Memoization means that if I calculate f(5), I can cache that so that if I call that function again with f(5), I do not need to calculate the answer, I just check the cache for that. It's like the LRU cache implementation using a DLL where least recently used will be the end of the linked list if we have an insertion policy of inserting into the head.
// The complexity of the brute force method with no memory is O(2^n) because each node breaks into two and there are n levels. Still confused why the brute force doesn't compile though.

// So the solution to this is basically to do recursion but save the result in an array that acts like a cache. The main point is that any particular step is made of up from n-1 + n-2 case because those are the only 2 possibilities to get to n from 1 or 2 steps away.
