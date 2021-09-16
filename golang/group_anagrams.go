func groupAnagrams(strs []string) [][]string {
	result := [][]string{}
	lexico := make(map[string][]string)

	// sort each string and add to map key value list if matching
	for _, str := range strs {
		sorted := sortString(str)
		lexico[sorted] = append(lexico[sorted], str)
	}

	// copy to return result
	for _, list := range lexico {
		result = append(result, list)
	}

	return result
}

func sortString(str string) string {
	s := strings.Split(str, "")
	sort.Strings(s)
	return strings.Join(s, "")
}