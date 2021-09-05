func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	// setup dummy head ptr
	head := &ListNode{
		Val: 0,
	}
	current, carry := head, 0

	// determine sum and carry, create node, attach to list
	for l1 != nil && l2 != nil {
		val := (l1.Val + l2.Val + carry) % 10
		carry = (l1.Val + l2.Val + carry) / 10
		node := &ListNode{
			Val: val,
		}
		current.Next = node
		current = node

		l1 = l1.Next
		l2 = l2.Next
	}

	// fill in for remaining list
	for l1 != nil {
		val := (l1.Val + carry) % 10
		carry = (l1.Val + carry) / 10
		node := &ListNode{
			Val: val,
		}
		current.Next = node
		current = node

		l1 = l1.Next
	}
	for l2 != nil {
		val := (l2.Val + carry) % 10
		carry = (l2.Val + carry) / 10
		node := &ListNode{
			Val: val,
		}
		current.Next = node
		current = node

		l2 = l2.Next
	}

	// if overflow carry
	if carry == 1 {
		node := &ListNode{
			Val: 1,
		}
		current.Next = node
		current = node
	}

	return head.Next
}