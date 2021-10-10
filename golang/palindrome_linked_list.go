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

func isPalindrome(head *ListNode) bool {
	// idea for this is to use slow fast pointer to find start of right half, reverse right half, then compare
	slow, fast := head, head
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}

	// avoid middle if palindrome is odd
	if fast != nil {
		slow = slow.Next
	}

	// slow is now start of right half
	right := reverse(slow)
	left := head

	// we are ignoring middle
	for right != nil {
		if left.Val != right.Val {
			return false
		}
		left = left.Next
		right = right.Next
	}

	return true
}

func reverse(node *ListNode) *ListNode {
	var next *ListNode
	current := node
	for current != nil {
		prev := current.Next
		current.Next = next
		next = current
		current = prev
	}

	// previously the tail
	return next
}