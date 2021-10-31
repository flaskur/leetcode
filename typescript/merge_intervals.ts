function merge(intervals: number[][]): number[][] {
	// edge case
	if (intervals.length <= 1) return intervals

	// sort by start value
	intervals.sort((a, b) => a[0] - b[0])

	let i = 0
	while (i < intervals.length - 1) {
		// total overlap case => remove interval
		if (intervals[i][0] <= intervals[i + 1][0] && intervals[i][1] >= intervals[i + 1][1]) {
			intervals.splice(i + 1, 1)
			continue
		} else if (intervals[i][0] <= intervals[i + 1][0] && intervals[i][1] >= intervals[i + 1][0]) {
			// partial overlap => replace end and remove interval
			intervals[i][1] = intervals[i + 1][1]
			intervals.splice(i + 1, 1)
			continue
		}
		i++
	}

	return intervals
}
