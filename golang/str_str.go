// return index of the first need in the haystack or -1 if not part of the haystack.
// two pointers approach, if i index matches, move j pointer to i+1 until needle matches, or fails.
func strStr(haystack string, needle string) int {
	// edge case empty needle
	if len(needle) == 0 {
		return 0
	}
	// edge case empty haystack
	if len(haystack) == 0 {
		return -1
	}

	for i := range haystack {
		// needle cannot fit in haystack
		if i+len(needle) > len(haystack) {
			break
		}

		for j := range needle {
			if haystack[i+j] != needle[j] {
				break
			}

			if j == len(needle)-1 {
				return i
			}
		}
	}

	return -1
}