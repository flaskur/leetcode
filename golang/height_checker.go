// students are in a single file line by increasing order, find how many students are different from the expected line of students ordered by height.
func heightChecker(heights []int) int {
	expected := make([]int, len(heights))
	copy(expected, heights)
	sort.Ints(expected)

	count := 0
	for i := 0; i < len(heights); i++ {
		if heights[i] != expected[i] {
			count++
		}
	}

	return count
}