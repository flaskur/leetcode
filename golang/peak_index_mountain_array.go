func peakIndexInMountainArray(arr []int) int {
	for i := 0; i < len(arr)-1; i++ {
		if arr[i] > arr[i+1] {
			return i
		}
	}
	return -1
}

func peakIndexInMountainArray(arr []int) int {
	start, end := 0, len(arr)-1
	for start <= end {
		middle := (start + end) / 2
		if arr[middle] > arr[middle-1] && arr[middle] > arr[middle+1] {
			return middle
		} else if arr[middle] > arr[middle-1] && arr[middle] < arr[middle+1] {
			start = middle
		} else if arr[middle] > arr[middle+1] && arr[middle] < arr[middle-1] {
			end = middle
		}
	}

	return start
}