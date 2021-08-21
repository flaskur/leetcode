func modifyString(s string) string {
	var mark rune = 'a'

	for index, char := range s {
		if char == '?' {
			if index == 0 {
				if len(s) == 1 {
					s = string(mark)
					break
				}

				for mark == rune(s[index+1]) {
					mark += 1
					if mark > 'z' {
						mark = 'a'
					}
				}
				s = s[:index] + string(mark) + s[index+1:]
			} else if index == len(s)-1 {
				for mark == rune(s[index-1]) {
					mark += 1
					if mark > 'z' {
						mark = 'a'
					}
				}
				s = s[:index] + string(mark) + s[index+1:]
			} else {
				for mark == rune(s[index-1]) || mark == rune(s[index+1]) {
					mark += 1
					if mark > 'z' {
						mark = 'a'
					}
				}
				s = s[:index] + string(mark) + s[index+1:]
			}
		}
	}

	return s
}