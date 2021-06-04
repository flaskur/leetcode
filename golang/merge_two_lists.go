// merge two sorted linked lists and return it as a sorted list.
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	// edge case
	if l1 == nil {
		return l2
	}
	if l2 == nil {
		return l1
	}

	// find head
	var head *ListNode
	if l1.Val <= l2.Val {
		head = l1
		l1 = l1.Next
	} else {
		head = l2
		l2 = l2.Next
	}

	// build list from current, updating each list pointer
	current := head
	for l1 != nil && l2 != nil {
		if l1.Val <= l2.Val {
			current.Next = l1
			current = current.Next
			l1 = l1.Next
		} else {
			current.Next = l2
			current = current.Next
			l2 = l2.Next
		}
	}

	// connect with remaining list
	if l1 == nil {
		current.Next = l2
	} else if l2 == nil {
		current.Next = l1
	}

	return head
}