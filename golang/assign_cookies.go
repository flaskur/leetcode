func findContentChildren(g []int, s []int) int {
	// you should prioritize the children with the smallest greed and work your way upwards
	// but in order to do that you need to iterate through a sorted list of cookie sizes and find the next one
	sort.Ints(g)
	sort.Ints(s)
	i := 0 // to represent position in size

	content := 0
	for _, greed := range g {
		for i < len(s) {
			if greed <= s[i] {
				content++
				i++
				break
			}
			i++
		}
	}

	return content
}

func findContentChildren(g []int, s []int) int {
	sort.Ints(g)
	sort.Ints(s)

	gi, si, content := 0, 0, 0
	for gi < len(g) && si < len(s) {
		if g[gi] <= s[si] {
			content++
			gi++
			si++
		} else {
			si++
		}
	}

	return content
}