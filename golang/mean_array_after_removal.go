// given an integer array, return the mean of the remaining integers after removing the smallest and largest 5% of the elements, where arr length is guaranteed to be divisible by 20.
func trimMean(arr []int) float64 {
	remove := len(arr) / 20 // how many to remove on each side
	sort.Ints(arr)

	total := 0
	for _, num := range arr {
		total += num
	}

	for i := 0; i < remove; i++ {
		total -= arr[i]
		total -= arr[len(arr)-1-i]
	}

	return float64(total) / float64(len(arr)-2*remove)
}