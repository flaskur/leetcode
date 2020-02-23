/**
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
	if (intervals.length === 0) return intervals;
	if (intervals.length === 1) return intervals;
	// Sort it first based on the first number of each interval.
	intervals.sort((a, b) => {
		return a[0] - b[0];
	});
	console.log(intervals);
	// Iterate through each interval and check overlap by checking if the second element in the current is greater than or equal to the first element in the next. Populate a result 2D array.
	// let result = [];

	// let i = 0;
	// // Don't check the last one?
	// for (i = 0; i < intervals.length - 1; i++) {
	// 	if (intervals[i][1] >= intervals[i + 1][0] && intervals[i][1] < intervals[i + 1][1]) {
	// 		// If it overlaps only into the middle but not the whole thing.
	// 		result.push([ intervals[i][0], intervals[i + 1][1] ]);
	// 		// Skip the next one since it overlaps.
	// 		i += 1;
	// 	} else if (intervals[i][1] >= intervals[i + 1][1]) {
	// 		// If it overlaps the whole thing, then skip the next one.
	// 		result.push([ intervals[i][0], intervals[i][1] ]);
	// 		i += 1;
	// 	} else result.push([ intervals[i][0], intervals[i][1] ]);
	// }
	// // If the second to last interval merged the last one, then i would be intervals.length - 2 + 1 + 1 = intervals.length.
	// // If the second to last interval did not merge, then i would be intervals - 1, hence we should add it to the results.
	// if (i === intervals.length - 1) result.push([ intervals[i][0], intervals[i][1] ]);

	// Above approach doesn't work because it's not entirely pairwise. So three intervals might combine together which means that you actually need an actively updating array. So in those particular cases, you'll want to splice into the array at that specific position, the combined intervals and then repeat at the same array. You would skip the last case as well I believe.
	let i = 0;
	let j = intervals.length - 1;
	while (i < j) {
		if (intervals[i][1] >= intervals[i + 1][0] && intervals[i][1] < intervals[i + 1][1]) {
			let combo = [ intervals[i][0], intervals[i + 1][1] ];
			intervals.splice(i, 2, combo);
			// Need to repeat on the same index.
			j = intervals.length - 1;
			continue;
		} else if (intervals[i][1] >= intervals[i + 1][1]) {
			let combo = [ intervals[i][0], intervals[i][1] ];
			intervals.splice(i, 2, combo);
			j = intervals.length - 1;
			continue;
		} else {
			// The current one is fine, just move on. We are assuming intervals mutates and I can return it.
			i += 1;
		}
	}

	return intervals;
};

// So this one is a little tricky. You start off by sorting based on the first element of each interval. Then there are two cases for combination, depending on partial or total overlap. To do this you needed to actively change the array so you also needed to splice a bunch and update the end index repeatedly.
