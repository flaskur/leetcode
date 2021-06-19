func canFormArray(arr []int, pieces [][]int) bool {
	i := 0
	for i < len(arr) {
		piece := []int{}
		for k, p := range pieces {
			if p[0] == arr[i] {
				piece = append(piece, p...)                  // now a candidate
				pieces = append(pieces[:k], pieces[k+1:]...) // remove piece
				break
			}
		}

		// couldn't find piece match
		if len(piece) == 0 {
			return false
		}

		// validate entire piece match
		for j := 0; j < len(piece); j++ {
			if arr[i+j] != piece[j] {
				return false
			}
		}

		// piece is valid, update pointer
		i += len(piece)
	}

	return true
}