func checkIfExist(arr []int) bool {
	numMap := make(map[int]bool, len(arr))
	zeroCount := 0
	for _, num := range arr {
		if num == 0 {
			zeroCount++
		} else {
			numMap[num] = true
		}
	}
	if zeroCount >= 2 {
		return true
	}
	for _, num := range arr {
		if _, ok := numMap[num*2]; ok {
			return true
		}
	}
	return false
}