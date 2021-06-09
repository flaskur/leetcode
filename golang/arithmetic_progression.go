// a sequence of nums is an arithmetic progression if the difference between two consecutive elements is the same. given an array determine if it can be rearranged into an arithmetic progression.
func canMakeArithmeticProgression(arr []int) bool {
	sort.Ints(arr)
	difference := arr[1] - arr[0]

	for i := 1; i < len(arr)-1; i++ {
		if arr[i+1]-arr[i] != difference {
			return false
		}
	}

	return true
}