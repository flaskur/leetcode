func generateParenthesis(n int) []string {
	result := []string{}
	helper(n, 0, 0, "", &result)
	return result
}

func helper(n int, left int, right int, current string, result *[]string) {
	// base case
	if left == right && left == n {
		*result = append(*result, current)
		return
	}

	// recursion based off left right count
	if left == n {
		helper(n, left, right+1, current+")", result)
	} else if left == right {
		helper(n, left+1, right, current+"(", result)
	} else if left > right {
		helper(n, left+1, right, current+"(", result)
		helper(n, left, right+1, current+")", result)
	}
}