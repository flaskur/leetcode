// return number of items that match the given rule.
func countMatches(items [][]string, ruleKey string, ruleValue string) int {
	count := 0
	index := -1

	switch ruleKey {
	case "type":
		index = 0
	case "color":
		index = 1
	case "name":
		index = 2
	}

	for _, item := range items {
		if item[index] == ruleValue {
			count++
		}
	}

	return count
}