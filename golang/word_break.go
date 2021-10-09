// backtracking TLE
func wordBreak(s string, wordDict []string) bool {
	return helper(s, wordDict, "")
}

func helper(s string, wordDict []string, current string) bool {
	// base case
	if len(current) >= len(s) {
		if current == s {
			return true
		}
		return false
	}

	result := false
	for _, segment := range wordDict {
		// only attempt to backtrack if adding segment progresses towards s
		joinLen := len(current) + len(segment)
		if joinLen > len(s) {
			continue
		}
		if current+segment == s[:joinLen] {
			if helper(s, wordDict, current+segment) {
				result = true
			}
		}
	}

	return result
}

func wordBreak(s string, wordDict []string) bool {
	if len(wordDict) == 0 {
		return false
	}

	words := map[string]bool{}
	for _, word := range wordDict {
		words[word] = true
	}

	dp := make([]bool, len(s)+1)
	dp[0] = true // means you can make an empty string already

	// we try to build the current word from prev result + some word in dict
	for i := 1; i <= len(s); i++ {
		// j ptr is used to find place of word we already found
		for j := i - 1; j >= 0; j-- {
			// we can make this word already, so segment from j to i
			if dp[j] {
				word := s[j:i]
				if _, ok := words[word]; ok {
					dp[i] = true
					break
				}
			}
		}
	}

	return dp[len(dp)-1]
}