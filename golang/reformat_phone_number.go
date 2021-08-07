func reformatNumber(number string) string {
	number = strings.ReplaceAll(number, "-", "")
	number = strings.ReplaceAll(number, " ", "")

	groups := []string{}
	i := 0
	for i < len(number) {
		// there are more than 4 digits left
		if i < len(number)-4 {
			groups = append(groups, number[i:i+3])
			i += 3
			continue
		} else if i == len(number)-2 {
			groups = append(groups, number[i:i+2])
			i += 2
		} else if i == len(number)-3 {
			groups = append(groups, number[i:i+3])
			i += 3
		} else if i == len(number)-4 {
			groups = append(groups, number[i:i+2], number[i+2:i+4])
			i += 4
		}
	}

	return strings.Join(groups, "-")
}