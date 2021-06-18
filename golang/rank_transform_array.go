func arrayRankTransform(arr []int) []int {
	sortedArr := make([]int, len(arr))
	copy(sortedArr, arr)
	sort.Ints(sortedArr)

	ranks := map[int]int{}

	rank := 0
	current := math.MinInt32
	for _, num := range sortedArr {
		if num != current {
			current = num
			rank++
			ranks[num] = rank
		}
	}

	for i, num := range arr {
		arr[i] = ranks[num]
	}

	return arr
}