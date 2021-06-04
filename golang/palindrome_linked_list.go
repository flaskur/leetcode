// given the head of a singly linked list, return true if its a palindrome.
// populate a slice with the values, then check using start and end pointers.
func isPalindrome(head *ListNode) bool {
	// edge case, empty list is palindrome
	if head == nil {
		return true
	}

	// populate slice with list values
	list := []int{}
	for head != nil {
		list = append(list, head.Val)
		head = head.Next
	}

	// start/end pointer check
	i := 0
	j := len(list) - 1
	for i < j {
		if list[i] != list[j] {
			return false
		}
		i++
		j--
	}

	return true
}