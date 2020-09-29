/**
 * On a staircase, the ith step has some non negative cost assigned to it. Once you pay, you can climb either one or two steps. Find the minimum cost to reach the top of the floor.
 * This is similar to climbing stairs, but this time we keep track of cost from a given array. 
 * The top of the stairs is not listed on the costs.
 */
const minCostClimbingStairs = (cost) => {
	// minCost = Infinity;

	// add 0 to the end so cost not undefined at top
	cost.push(0);

	const helper = (step, totalCost) => {
		// base case
		// compensate for added 0 at end
		if (step >= cost.length - 2) {
			return totalCost;
		}

		return Math.min(helper(step + 1, totalCost + cost[step + 1]), helper(step + 2, totalCost + cost[step + 2]));
	};

	return helper(-1, 0);
};

// Times out for some reason probably because there are too many calculations. That's because you need to memoize it in some fashion. The problem is that there isn't a definite cost associated with a path since there are different ways to get to that particular spot. That's why we keep the total cost as a parameter. No sure what else you could memoize in this case.
