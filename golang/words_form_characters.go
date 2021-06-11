// given an array of strings and a string full of chars, find the sum of the lengths of all strings that can be formed using the chars.
// func countCharacters(words []string, chars string) int {
// 	count, countMap := 0, map[rune]int{}
// 	for _, char := range chars {
// 		countMap[char]++
// 	}

// 	for _, word := range words {
// 		// refresh count map for each word check
// 		temp := map[rune]int{}
// 		for key, value := range countMap {
// 			temp[key] = value
// 		}

// 		success := true

// 		for _, char := range word {
// 			if temp[char] > 0 {
// 				temp[char]--
// 			} else {
// 				success = false
// 				break
// 			}
// 		}

// 		if success {
// 			count += len(word)
// 		}
// 	}

// 	return count
// }

// copying array is more efficient than copying map
func countCharacters(words []string, chars string) int {
	count := 0
	buckets := make([]int, 26)
	for _, char := range chars {
		buckets[int(char-'a')]++
	}

	for _, word := range words {
		temp := make([]int, 26)
		copy(temp, buckets)
		success := true

		for _, char := range word {
			if temp[int(char-'a')] > 0 {
				temp[int(char-'a')]--
			} else {
				success = false
				break
			}
		}

		if success {
			count += len(word)
		}
	}

	return count
}