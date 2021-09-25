func decodeString(s string) string {
	num := 0
	stack := []string{}
	stack = append(stack, "") // non empty to avoid empty pop

	for i := 0; i < len(s); i++ {
		digit, err := strconv.Atoi(string(s[i]))
		// found a number
		if err == nil {
			num = 10*num + digit
		} else if s[i] == '[' {
			// start bracket means we found iter num
			stack = append(stack, strconv.Itoa(num))
			num = 0
			stack = append(stack, "") // buffer to avoid num selection
		} else if s[i] == ']' {
			var str1, mid, str2 string
			str1, stack = stack[len(stack)-1], stack[:len(stack)-1]
			mid, stack = stack[len(stack)-1], stack[:len(stack)-1]
			rep, _ := strconv.Atoi(mid)
			str2, stack = stack[len(stack)-1], stack[:len(stack)-1]
			stack = append(stack, str2+strings.Repeat(str1, rep))
		} else {
			// popping last to keep stack order --> otherwise just adding char to stack
			var last string
			last, stack = stack[len(stack)-1], stack[:len(stack)-1]
			stack = append(stack, last+string(s[i]))
		}
	}

	return strings.Join(stack, "")
}