// find the cost to move all chips into the same position where moving by 2 is 0 cost and moving by 1 is 1 cost.
// idea is that we find even or odds have more chips, then we move the ones that have less count. then the min cost is just the count of the either even/odd chips.
func minCostToMoveChips(position []int) int {
	evenCount, oddCount := 0, 0
	for _, place := range position {
		if place%2 == 0 {
			evenCount++
		} else {
			oddCount++
		}
	}

	if evenCount >= oddCount {
		return oddCount
	}
	return evenCount
}