func validMountainArray(arr []int) bool {
	if len(arr) < 3 {
		return false
	}

	// double peak will fail strictly increasing
	peakIndex := 1
	for i := 1; i < len(arr)-1; i++ {
		if arr[i] > arr[peakIndex] {
			peakIndex = i
		}
	}

	// move both ends to peak, checking nondecreasing
	start, end := 0, len(arr)-1
	current := -1
	for start <= peakIndex {
		if arr[start] <= current {
			return false
		}
		current = arr[start]
		start++
	}
	current = -1
	for end >= peakIndex {
		if arr[end] <= current {
			return false
		}
		current = arr[end]
		end--
	}

	return true
}