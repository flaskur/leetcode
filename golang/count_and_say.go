// given positive integer n, return the nth term of count and say sequence.
func countAndSay(n int) string {
	// base case
	if n == 1 {
		return "1"
	}

	return say(countAndSay(n - 1))
}

// core logic here is that you keep a pointer at num, only switch when you find diff num.
func say(seq string) string {
	result := []string{}
	num := seq[0]
	count := 0

	// iterate through sequence and count if same num
	// on difference append to result and change num pointer to new value
	for i := 0; i < len(seq); i++ {
		if seq[i] == num {
			count++
		} else {
			result = append(result, strconv.Itoa(count), string(num))

			// reset for new num
			num = seq[i]
			count = 1
		}
	}
	result = append(result, strconv.Itoa(count), string(num))

	return strings.Join(result, "")
}