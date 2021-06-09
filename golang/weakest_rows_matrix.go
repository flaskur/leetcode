// given a matrix of 1's representing soldiers and 0's representing civilians, soldiers in front(left) of civilians(right), return the indices of the k weakest rows ordered from weakest to strongest.
func kWeakestRows(mat [][]int, k int) []int {
	countMap := map[int]int{}
	for i := range mat {
		soldiers := 0
		for _, val := range mat[i] {
			if val == 0 {
				break
			}
			soldiers++
		}
		countMap[i] = soldiers
	}

	count := 0
	result := []int{}

	for count < k {
		minIndex := -1
		minCount := math.MaxInt32

		// skip indices that were deleted
		for i := 0; i < len(mat); i++ {
			if _, ok := countMap[i]; !ok {
				continue
			}

			if countMap[i] < minCount {
				minIndex = i
				minCount = countMap[i]
			}
		}

		delete(countMap, minIndex)
		result = append(result, minIndex)
		count++
	}

	return result
}