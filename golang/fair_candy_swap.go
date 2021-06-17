func fairCandySwap(aliceSizes []int, bobSizes []int) []int {
	aliceSet, bobSet := map[int]bool{}, map[int]bool{}
	aliceSum, bobSum := 0, 0
	for _, num := range aliceSizes {
		aliceSet[num] = true
		aliceSum += num
	}
	for _, num := range bobSizes {
		bobSet[num] = true
		bobSum += num
	}

	diff := aliceSum - bobSum
	if diff > 0 {
		// alice must give more to bob
		for aliceNum := range aliceSet {
			target := aliceNum - diff/2
			if _, ok := bobSet[target]; ok {
				return []int{aliceNum, target}
			}
		}
	}
	if diff < 0 {
		for bobNum := range bobSet {
			target := bobNum + diff/2
			if _, ok := aliceSet[target]; ok {
				return []int{target, bobNum}
			}
		}
	}

	return []int{0, 0}
}