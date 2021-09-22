func findAnagrams(s string, p string) []int {
	// anagrams must have the same len --> sliding window

	// edge case
	if len(p) > len(s) {
		return []int{}
	}

	// setup freq map for anagram pattern
	freq := map[rune]int{}
	for _, char := range p {
		freq[char]++
	}

	// setup window
	window := map[rune]int{}
	for i := range p {
		window[rune(s[i])]++
	}

	result := []int{}
	for i := 0; i <= len(s)-len(p); i++ {
		// check that window range matches anagram pattern
		valid := true
		for char, count := range window {
			if count != freq[char] {
				valid = false
				break
			}
		}
		if valid {
			result = append(result, i)
		}

		// move window by 1 space if not last window
		if i != len(s)-len(p) {
			window[rune(s[i])]--
			window[rune(s[i+len(p)])]++
		}
	}

	return result
}

func findAnagrams(s string, p string) []int {
	result := []int{}
	if len(p) > len(s) || len(s) == 0 || len(p) == 0 {
		return []int{}
	}

	// positive means char still needed in anagram
	// negative means char found more times than necessary or not at all
	buckets := [26]int{}
	for _, char := range p {
		buckets[char-'a']++
	}

	start, end, diff := 0, 0, len(p)

	// setup window to be of len p
	for end < len(p) {
		buckets[s[end]-'a']-- // decrement for anagram

		// check progress to anagram
		// if its still 0 or greater, that means decrementing it helped towards making anagram
		if buckets[s[end]-'a'] >= 0 {
			diff--
		}

		end++
	}

	// starting window is anagram
	if diff == 0 {
		result = append(result, 0)
	}

	for end < len(s) {
		// if not negative, that means start was part of the anagram
		// i think we are moving start forward so if it was a part of it, we lose that progress
		// if it was not a part of it, then it was already accounted for in bucket freq
		if buckets[s[start]-'a'] >= 0 {
			diff++
		}

		// add back start to hash
		buckets[s[start]-'a']++

		// moving start by 1
		start++

		// end is currently the candidate new end for window
		buckets[s[end]-'a']--
		if buckets[s[end]-'a'] >= 0 {
			diff--
		}

		if diff == 0 {
			result = append(result, start)
		}

		end++
	}

	return result
}