func duplicateZeros(arr []int) {
	i := 0
	for i < len(arr) {
		if arr[i] == 0 {
			arr = append(arr[:i+1], arr[i:len(arr)-1]...)
			i += 2
		} else {
			i++
		}
	}
}