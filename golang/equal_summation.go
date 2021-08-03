func isSumEqual(firstWord string, secondWord string, targetWord string) bool {
	first := []byte{}
	for _, letter := range firstWord {
		num := int(letter - 'a')
		first = append(first, strconv.Itoa(num)[0])
	}
	second := []byte{}
	for _, letter := range secondWord {
		num := int(letter - 'a')
		second = append(second, strconv.Itoa(num)[0])
	}
	target := []byte{}
	for _, letter := range targetWord {
		num := int(letter - 'a')
		target = append(target, strconv.Itoa(num)[0])
	}

	firstNum, _ := strconv.Atoi(string(first))
	secondNum, _ := strconv.Atoi(string(second))
	targetNum, _ := strconv.Atoi(string(target))

	return firstNum+secondNum == targetNum
}