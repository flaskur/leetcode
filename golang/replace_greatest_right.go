// given an array, replace every element with greatest to its right and replace last with -1.
func replaceElements(arr []int) []int {
	greatest := arr[len(arr)-1]
	arr[len(arr)-1] = -1

	for i := len(arr) - 2; i >= 0; i-- {
		if arr[i] > greatest {
			arr[i], greatest = greatest, arr[i]
		} else {
			arr[i] = greatest
		}
	}

	return arr
}