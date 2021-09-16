func merge(intervals [][]int) [][]int {
	// if interval completely overlaps, delete smaller interval
	// if interval1 start > interval2 start and interval1 end > interval2 start then merge

	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

	i := 0
	for i < len(intervals)-1 {
		// overlap case
		if intervals[i][0] <= intervals[i+1][0] && intervals[i][1] >= intervals[i+1][1] {
			intervals = append(intervals[:i+1], intervals[i+2:]...)
			continue
		}

		// merge case
		if intervals[i][0] <= intervals[i+1][0] && intervals[i][1] >= intervals[i+1][0] {
			intervals[i][1] = intervals[i+1][1]
			intervals = append(intervals[:i+1], intervals[i+2:]...)
			continue
		}

		// move on if no overlap or merge
		i++
	}

	return intervals
}