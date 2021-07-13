func lemonadeChange(bills []int) bool {
	fives, tens := 0, 0

	for _, bill := range bills {
		if bill == 20 {
			// need either 3 fives or 1 five and 1 ten, prioritize 5/10
			if tens >= 1 && fives >= 1 {
				tens--
				fives--
			} else if fives >= 3 {
				fives -= 3
			} else {
				return false
			}
		} else if bill == 10 {
			if fives >= 1 {
				fives--
			} else {
				return false
			}
			tens++
		} else if bill == 5 {
			fives++
		}
	}

	return true
}